import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import productsData from '../data/products.json';

const Downloads = () => {
    React.useEffect(() => {
        document.title = "Blue World Exports | Catalogues & Downloads";
    }, []);

    const productImageMap = {
        'pipe': '/images/hero/pipe_home.png',
        'tarpaulin': '/images/hero/tarpauline_home.png',
        'rope': '/images/hero/rope_home.png',
        'shade-net': '/images/hero/shadenet_home.png',
        'packaging-strap': '/images/hero/packagingstrap_home.png'
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 md:py-24"
        >
            <div className="container-custom">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 md:mb-24 px-4 overflow-hidden">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="aspect-[3/4] w-full max-w-[280px] sm:max-w-sm bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center relative overflow-hidden group"
                        >
                            <img
                                src="/images/brand/catalogue_cover.png"
                                alt="Blue World Exports Catalogue"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-gray-900 dark:text-white leading-tight">Explore Our Range</h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 md:mb-10 lg:max-w-xl">
                            Download our comprehensive product catalogues for detailed technical specifications, available sizes, and application guides. Our catalogues provide all the information you need for procurement.
                        </p>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            href="/brochure_pdfs/general.pdf" 
                            download 
                            className="btn-primary !px-8 md:!px-10 inline-flex items-center space-x-3 shadow-xl shadow-brand-blue/20"
                        >
                            <Download className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="text-base md:text-lg font-bold">Download General Catalogue</span>
                        </motion.a>
                    </div>
                </div>

                {/* Rows for each product */}
                <div className="space-y-6 md:space-y-8 px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 border-b border-gray-100 dark:border-gray-800 pb-4 md:pb-6 text-gray-900 dark:text-white">Product Specific Catalogues</h2>

                    {productsData.map((product, index) => {
                        let pdfLink = '/brochure_pdfs/general.pdf';
                        switch (product.slug) {
                            case 'tarpaulin': pdfLink = '/brochure_pdfs/Tarpauline Catlog.pdf'; break;
                            case 'rope': pdfLink = '/brochure_pdfs/Rope Catlog.pdf'; break;
                            case 'pipe': pdfLink = '/brochure_pdfs/Pipe Catlog.pdf'; break;
                            case 'shade-net': pdfLink = '/brochure_pdfs/Shaade Net Catlog.pdf'; break;
                            case 'packaging-strap': pdfLink = '/brochure_pdfs/Packaging Strap Catlog.pdf'; break;
                        }

                        return (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-5 md:p-8 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 md:gap-8 hover:shadow-2xl hover:border-brand-blue/30 transition-all cursor-default"
                            >
                                {/* 3D Book / Catalogue Thumbnail Effect */}
                                <div className="relative w-24 h-32 md:w-28 md:h-40 flex-shrink-0 group/book transition-transform hover:scale-105 duration-300">
                                    {/* Page edges effect */}
                                    <div className="absolute right-0 top-1 bottom-1 w-2 bg-gray-200 dark:bg-gray-700 rounded-r shadow-sm" />
                                    {/* Spine shadow */}
                                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-black/30 z-10 rounded-l" />
                                    {/* Main Cover */}
                                    <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-l-md rounded-r overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md relative">
                                        <img 
                                            src={productImageMap[product.slug] || `https://placehold.co/200x300/f8fafc/94a3b8?text=${product.name}`} 
                                            alt={product.name} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/200x300/003399/white?text=Catalogue";
                                            }}
                                        />
                                        {/* Logo Overlay */}
                                        <div className="absolute top-2 left-3 w-6 h-6 md:w-7 md:h-7 bg-white/95 p-1 rounded shadow-sm border border-gray-100">
                                            <img src="/images/logo/BWE LOGO.jpeg" alt="BWE" className="w-full h-full object-contain" />
                                        </div>
                                        {/* Bottom Label banner */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-brand-blue/95 py-1.5 px-2 backdrop-blur-sm">
                                            <p className="text-[7px] md:text-[8px] font-black text-white text-center uppercase tracking-widest truncate">
                                                {product.name}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Subtle Book shadow underneath */}
                                    <div className="absolute -bottom-2 left-2 right-2 h-2 bg-black/10 blur-md rounded-full -z-10" />
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">{product.name} Catalogue</h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-2 md:max-w-xl">
                                        {product.description} Includes size charts, material grades, and export packaging details for international orders.
                                    </p>
                                </div>
                                
                                <motion.a 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={pdfLink} 
                                    download 
                                    className="btn-secondary whitespace-nowrap !px-8 md:!px-10 inline-flex items-center space-x-2 w-full md:w-auto justify-center md:shadow-none hover:shadow-lg transition-all"
                                >
                                    <Download className="w-5 h-5" />
                                    <span className="font-bold">Download PDF</span>
                                </motion.a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Downloads;
