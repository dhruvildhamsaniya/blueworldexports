import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductGrid = ({ products }) => {
    const productImageMap = {
        'pipe': '/images/hero/pipe_home.png',
        'tarpaulin': '/images/hero/tarpauline_home.png',
        'rope': '/images/hero/rope_home.png',
        'shade-net': '/images/hero/shadenet_home.png',
        'packaging-strap': '/images/hero/packagingstrap_home.png'
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                    {/* Card Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                        <img
                            src={productImageMap[product.slug] || `https://placehold.co/400x300/f8fafc/94a3b8?text=${product.name.replace(/\s+/g, '+')}`}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-brand-blue transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6 line-clamp-2">
                            {product.description}
                        </p>
                        <Link
                            to={`/products/${product.slug}`}
                            className="flex items-center space-x-2 font-bold text-sm md:text-base text-brand-blue dark:text-blue-400"
                        >
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Hover Overlay Animation (Framer Motion) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-brand-blue/5 pointer-events-none"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ProductGrid;
