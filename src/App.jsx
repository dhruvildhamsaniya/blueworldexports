import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import SubcategoryDetail from './pages/SubcategoryDetail';
import Export from './pages/Export';
import Industry from './pages/Industry';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        // Use setTimeout to ensure the DOM has updated before scrolling
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }, 0);
    }, [pathname]);
    return null;
};

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="flex-grow">
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:slug" element={<ProductDetail />} />
                            <Route path="/products/:slug/:subslug" element={<SubcategoryDetail />} />
                            <Route path="/export" element={<Export />} />
                            <Route path="/industries" element={<Industry />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/downloads" element={<Downloads />} />
                            <Route path="/privacy" element={<PrivacyPolicy />} />
                            <Route path="/terms" element={<TermsOfService />} />

                            {/* i18n support routes could be added here if needed, 
                  but for now we use query/session based switching */}
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
