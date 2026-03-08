import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block -ml-3">
                            <img src="/images/logo/BWE LOGO.jpeg" alt="Blue World Logo" className="h-10 md:h-12 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Leading exporters of high-quality industrial and agricultural solutions for global needs worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1CDTGcjbCD/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/blueworldexports?igsh=bHJ0M3pzb2wxZzFw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-500 hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">Our Products</Link></li>
                            <li><Link to="/export" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">Export Presence</Link></li>
                            <li><Link to="/industries" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">Industries Served</Link></li>
                            <li><Link to="/downloads" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">Downloads</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-lg font-bold">Contact Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                                    <span>Office No 316, Nakshatra 7 Commercial Complex, Rajkot, Gujarat 360005, India</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                                    <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    <span>+91 87587 30666</span>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                                    <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=exportsblueworld@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors font-medium">exportsblueworld@gmail.com</a>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                                    <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@blueworldexports.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors font-medium">info@blueworldexports.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                    <p>© {currentYear} BLUE WORLD EXPORTS. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-brand-blue">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-brand-blue">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
