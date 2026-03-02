import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/home/ProductGrid';
import productsData from '../data/products.json';

const Products = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24"
        >
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-xl">
                        We offer a comprehensive range of high-performance products tailored for agriculture, construction, and industrial packaging.
                    </p>
                </div>

                <ProductGrid products={productsData} />
            </div>
        </motion.div>
    );
};

export default Products;
