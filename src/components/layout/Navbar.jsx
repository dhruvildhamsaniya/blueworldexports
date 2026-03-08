import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import productsData from '../../data/products.json';

const Navbar = ({ theme, toggleTheme }) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.products'), path: '/products' },
        { name: t('nav.export'), path: '/export' },
        { name: t('nav.industries'), path: '/industries' },
        { name: t('nav.downloads'), path: '/downloads' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container-custom py-1 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="/images/logo/BWE LOGO.jpeg" alt="Blue World Logo" className="h-10 md:h-10 w-auto object-contain" />
                </Link>

                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        item.path === '/products' ? (
                            <div key={item.path} className="relative group py-4">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        twMerge("flex items-center space-x-1 text-sm font-semibold transition-colors duration-200 group-hover:text-brand-blue dark:group-hover:text-blue-400",
                                            isActive ? "text-brand-blue dark:text-blue-400" : "text-gray-600 dark:text-gray-300")
                                    }
                                >
                                    <span>{item.name}</span>
                                    <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-200" />
                                </NavLink>
                                <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                                    <div className="py-2">
                                        {productsData.map(product => (
                                            <Link
                                                key={product.id}
                                                to={`/products/${product.slug}`}
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-brand-blue/5 hover:text-brand-blue dark:hover:bg-gray-800 transition-colors"
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    twMerge("text-sm font-semibold transition-colors duration-200 hover:text-brand-blue dark:hover:text-blue-400 py-4",
                                        isActive ? "text-brand-blue dark:text-blue-400" : "text-gray-600 dark:text-gray-300")
                                }
                            >
                                {item.name}
                            </NavLink>
                        )
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center space-x-2 border border-gray-100 dark:border-gray-800 transition-all font-medium text-sm"
                        >
                            <Globe className="w-4 h-4 text-brand-blue" />
                            <span className="hidden xl:inline">Select Language</span>
                            <span className="xl:hidden uppercase">{i18n.language.split('-')[0]}</span>
                            <ChevronDown className={clsx("w-4 h-4 transition-transform text-gray-400", langOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-1"
                                >
                                    <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">English</button>
                                    <button onClick={() => changeLanguage('hi')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">हिन्दी</button>
                                    <button onClick={() => changeLanguage('es')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Español</button>
                                    <button onClick={() => changeLanguage('fr')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Français</button>
                                    <button onClick={() => changeLanguage('ar')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">العربية</button>
                                <button onClick={() => changeLanguage('sw')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Kiswahili</button>
                                    <button onClick={() => changeLanguage('am')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Amharic</button>
                                    <button onClick={() => changeLanguage('zh')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">中文</button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-brand-dark border-t border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="container-custom py-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-brand-blue"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex flex-wrap gap-2">
                                    <button onClick={() => changeLanguage('en')} className={clsx("text-sm", i18n.language === 'en' ? "font-bold text-brand-blue" : "text-gray-500")}>EN</button>
                                    <button onClick={() => changeLanguage('hi')} className={clsx("text-sm", i18n.language === 'hi' ? "font-bold text-brand-blue" : "text-gray-500")}>HI</button>
                                    <button onClick={() => changeLanguage('es')} className={clsx("text-sm", i18n.language === 'es' ? "font-bold text-brand-blue" : "text-gray-500")}>ES</button>
                                    <button onClick={() => changeLanguage('fr')} className={clsx("text-sm", i18n.language === 'fr' ? "font-bold text-brand-blue" : "text-gray-500")}>FR</button>
                                    <button onClick={() => changeLanguage('ar')} className={clsx("text-sm", i18n.language === 'ar' ? "font-bold text-brand-blue" : "text-gray-500")}>AR</button>
                                    <button onClick={() => changeLanguage('sw')} className={clsx("text-sm", i18n.language === 'sw' ? "font-bold text-brand-blue" : "text-gray-500")}>SW</button>
                                    <button onClick={() => changeLanguage('am')} className={clsx("text-sm", i18n.language === 'am' ? "font-bold text-brand-blue" : "text-gray-500")}>AM</button>
                                    <button onClick={() => changeLanguage('zh')} className={clsx("text-sm", i18n.language === 'zh' ? "font-bold text-brand-blue" : "text-gray-500")}>ZH</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
