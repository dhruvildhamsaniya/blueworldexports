import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import ProductGrid from '../components/home/ProductGrid';
import productsData from '../data/products.json';

const Home = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        document.title = "Blue World Exports | Home - Premium Polymer Solutions";
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <Welcome />

            <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Premium Products</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                            Explore our range of high-quality industrial and agricultural products, including premium ropes, tarpaulins, shade nets, packaging straps, and industrial pipes.
                        </p>
                    </div>
                    <ProductGrid products={productsData} />
                </div>
            </section>

            {/* Why Choose Us Minimal Section */}
            <section className="py-16 md:py-24 border-t border-gray-100 dark:border-gray-800">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Global Quality, Local Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Strength", desc: "Built to withstand the toughest conditions." },
                            { title: "Flexibility", desc: "Solutions tailored to your specific needs." },
                            { title: "Trust", desc: "Driven by a legacy of reliability and excellence." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-brand-blue">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
