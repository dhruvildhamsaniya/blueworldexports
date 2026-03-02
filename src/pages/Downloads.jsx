import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import productsData from '../data/products.json';

const Downloads = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24"
        >
            <div className="container-custom">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <div className="aspect-[3/4] max-w-sm mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center relative overflow-hidden group">
                            <img
                                src="/images/brand/catalogue_cover.png"
                                alt="Blue World Exports Catalogue"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            <div className="absolute top-4 right-4 bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">GENERAL BROCHURE</div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl font-bold mb-8">Explore Our Range</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Download our comprehensive product catalogues for detailed technical specifications, available sizes, and application guides. Our brochures provide all the information you need for procurement and project planning.
                        </p>
                        <button className="btn-primary !px-10 flex items-center space-x-3">
                            <Download className="w-5 h-5" />
                            <span>Download General Brochure</span>
                        </button>
                    </div>
                </div>

                {/* Rows for each product */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-12 border-b border-gray-100 dark:border-gray-800 pb-6">Product Specific Brochures</h2>

                    {productsData.map((product, index) => (
                        <motion.div
                            key={product.slug}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 md:p-8 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-3xl flex flex-col md:flex-row items-center gap-8 hover:shadow-lg transition-all"
                        >
                            <div className="w-24 h-32 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-center border border-gray-100 dark:border-gray-800 flex-shrink-0 group-hover:bg-brand-blue/5 transition-colors">
                                <FileText className="w-10 h-10 text-brand-blue" />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-2">{product.name} Catalogue</h3>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-2 md:max-w-xl">
                                    {product.description} Includes size charts, material grades, and export packaging details.
                                </p>
                            </div>
                            <button className="btn-secondary whitespace-nowrap !px-8 flex items-center space-x-2">
                                <Download className="w-5 h-5" />
                                <span>Download PDF</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Downloads;
