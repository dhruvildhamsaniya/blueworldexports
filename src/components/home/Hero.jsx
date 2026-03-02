import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    { key: 'pipe', title: 'hero.pipe', image: '/images/hero/pipe_home.png' },
    { key: 'tarpaulin', title: 'hero.tarpaulin', image: '/images/hero/tarpauline_home.png' },
    { key: 'rope', title: 'hero.rope', image: '/images/hero/rope_home.png' },
    { key: 'shade_net', title: 'hero.shade_net', image: '/images/hero/shadenet_home.png' },
    { key: 'packaging_strap', title: 'hero.packaging_strap', image: '/images/hero/packagingstrap_home.png' },
];

const Hero = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[600px] md:h-[800px] overflow-hidden bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent z-10" />

                    {/* Main Image */}
                    <img
                        src={slides[current].image}
                        alt={t(slides[current].title)}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="container-custom relative h-full flex items-center z-20">
                <div className="max-w-3xl">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
                            {t(slides[current].title)}
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Link to="/products" className="btn-primary w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4">Explore Products</Link>
                            <Link to="/downloads" className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all w-full sm:w-auto text-center">
                                Download Brochure
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 z-30 flex space-x-4">
                <button onClick={prev} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-brand-blue w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
