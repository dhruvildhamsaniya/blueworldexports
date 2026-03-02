import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Side */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-brand-blue font-bold uppercase tracking-widest mb-4 text-sm md:text-base">About the Company</h4>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                                {t('welcome.title')}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                {t('welcome.description')}
                            </p>
                            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
                                <div className="p-4 md:p-0 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none">
                                    <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1 md:mb-2">25+</div>
                                    <div className="text-xs md:text-sm text-gray-500 uppercase font-semibold">Years of Experience</div>
                                </div>
                                <div className="p-4 md:p-0 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none">
                                    <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1 md:mb-2">500+</div>
                                    <div className="text-xs md:text-sm text-gray-500 uppercase font-semibold">Global Clients</div>
                                </div>
                            </div>
                            <Link to="/about" className="btn-secondary w-full sm:w-auto text-center block sm:inline-block">Read More About Us</Link>
                        </motion.div>
                    </div>

                    {/* Video / Visual Side */}
                    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <div className="aspect-[4/3] md:aspect-video bg-gray-200 dark:bg-gray-800 relative flex items-center justify-center">
                                <img
                                    src="/images/brand/welcome_products.png"
                                    alt="Blue World Export Products"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/5 transition-colors" />
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer relative z-10 border border-white/50">
                                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 glass-card rounded-2xl border border-white/10 z-20">
                                <p className="text-xs md:text-sm font-semibold text-white drop-shadow-md text-center md:text-left">Explore Our Global Operations</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
