import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Ship, Plane, Truck } from 'lucide-react';

const Export = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-24"
        >
            {/* Hero */}
            <section className="h-[60vh] min-h-[500px] relative flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <img
                        src="/images/backgrounds/export_hero.png"
                        alt="Export Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/60 to-transparent z-10" />
                </div>
                <div className="container-custom relative z-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                                Expanding our presence across <span className="text-brand-blue">international markets</span>
                            </h1>
                            <p className="text-xl text-blue-100 leading-relaxed font-light">
                                We take pride in our extensive export network, reaching partners across Southeast Asia, Africa, the Middle East, and beyond. Our logistics team ensures that every shipment is handled with precision and arrives on schedule.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Map Visual */}
            <section className="py-16 md:py-24">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">Global Reach</h2>
                    <div className="relative">
                        <div className="aspect-[4/3] sm:aspect-video md:aspect-[21/9] bg-gray-900 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex items-center justify-center border border-gray-800 relative group overflow-hidden">
                            <img
                                src="/images/backgrounds/global_map.png"
                                alt="Global Reach Map"
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
                        </div>

                        {/* Interactive floating card - Stacked below on mobile (slightly overlapping), absolute on desktop */}
                        <div className="w-[90%] mx-auto relative -mt-12 sm:mt-0 sm:absolute sm:bottom-8 sm:left-8 p-6 backdrop-blur-md bg-gray-900/95 sm:bg-black/60 md:bg-black/40 rounded-xl md:rounded-2xl text-left border border-gray-700 sm:border-white/20 sm:max-w-sm z-20 shadow-xl sm:w-auto sm:mx-0">
                            <Globe className="w-6 h-6 md:w-8 md:h-8 text-brand-blue mb-3 md:mb-4" />
                            <h3 className="font-bold mb-2 text-white text-lg md:text-xl">Multi-Continental Logistics</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">Regular shipments to North America, Africa, Gulf Countries, and across Indian states with optimized routing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Cards */}
            <section className="py-24 bg-gray-50 dark:bg-gray-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Ship, title: "Ocean Freight", desc: "Cost-effective bulk shipping for large industrial orders." },
                            { icon: Plane, title: "Air Express", desc: "Fast delivery for mission-critical samples and urgent requirements." },
                            { icon: Truck, title: "Door-to-Door", desc: "Complete logistics management from our factory to your warehouse." }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8">
                                <div className="w-20 h-20 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                    <item.icon className="w-10 h-10 text-brand-blue" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Export;
