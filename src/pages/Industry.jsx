import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Construction, Package, Anchor, HardHat, Warehouse, Mountain, Sprout, Droplets, PawPrint } from 'lucide-react';
import industriesData from '../data/industries.json';

const iconMap = {
    1: Sprout,
    2: Construction,
    3: Package,
    4: Anchor,
    5: Factory,
    6: Warehouse,
    7: Mountain,
    8: Droplets,
    9: HardHat,
    10: PawPrint
};

const Industry = () => {
    const industryImageMap = {
        1: '/images/industries/agriculture.jfif',
        2: '/images/industries/construction.jfif',
        3: '/images/industries/packaging.jfif',
        4: '/images/industries/marine.jfif',
        5: '/images/industries/industrial manufacturing.jfif',
        6: '/images/industries/warehouse.jfif',
        7: '/images/industries/mining.jfif',
        8: '/images/industries/horticulture.jfif',
        9: '/images/industries/oil_chemical.jfif',
        10: '/images/industries/poultry_dairy.jpg'
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-24"
        >
            {/* Hero */}
            <section className="h-[50vh] min-h-[400px] relative flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-950">
                    <img
                        src="/images/backgrounds/industry_hero.png"
                        alt="Industries Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>
                <div className="container-custom text-center relative z-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Industries We <span className="text-brand-blue">Serve</span></h1>
                        <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light">
                            Our diverse product portfolio allows us to support various sectors with high-performance polymer solutions tailored for specific industrial challenges.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industry Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industriesData.map((item, index) => {
                            const industryImage = industryImageMap[item.id];
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group p-10 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-8 overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                        <img src={industryImage} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Industry;
