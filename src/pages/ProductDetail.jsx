import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetail = () => {
    const { slug } = useParams();
    const product = productsData.find(p => p.slug === slug);

    React.useEffect(() => {
        if (product) {
            document.title = `${product.name} | Blue World Exports - Industrial Polymer Solutions`;
        }
    }, [product]);

    const productImageMap = {
        'pipe': '/images/hero/pipe_home.png',
        'tarpaulin': '/images/hero/tarpauline_home.png',
        'rope': '/images/hero/rope_home.png',
        'shade-net': '/images/hero/shadenet_home.png',
        'packaging-strap': '/images/hero/packagingstrap_home.png'
    };

    const subcategoryImageMap = {
        'garden-pipe': '/images/products/pipe/Garden pipe/PVC-Garden-Hose-1.jpg',
        'suction-pipe': '/images/products/pipe/Suction pipe/pvc-light-duty-suction-hose.jpeg',
        'braided-pipe': '/images/products/pipe/Brided pipe/9a3196484fc3bd9d341da14f9bcdeab6.jpg',
        'layflat-pipe': '/images/products/pipe/Lay Flat pipe/LayFlat 1.png',
        'hdpe-tarpaulin': '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/Yellow-Multilayer-Superpoly-Tarpaulins..jpg',
        'ldpe-tarpaulin': '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/ldpe-tarpaulin-sheet-500x500.webp',
        'hdpe-rope': '/images/products/rope/hdpe/HDPE Rope 1.png',
        'pp-rope': '/images/products/rope/pp/pp .jpeg',
        'agriculture-shade-net': '/images/products/Shade net/agriculture/Shade net 1.png',
        'construction-scaffold-net': '/images/products/Shade net/construction/Gemini_Generated_Image_20hp5m20hp5m20hp.png',
        'pp-strap': '/images/products/packaging_strap/PP Strap/PP-Strap-1024x434.jpg',
        'pet-strap': '/images/products/packaging_strap/PET Strap/pet-strap-roll3.webp'
    };

    if (!product) {
        return <div className="py-24 text-center">Product not found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 md:py-24"
        >
            <div className="container-custom">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-12">
                    <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link to="/products" className="hover:text-brand-blue transition-colors">Products</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-900 dark:text-white font-bold">{product.name}</span>
                </div>

                {/* Introduction */}
                <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
                                {product.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-blue font-bold mb-6 uppercase tracking-wider">
                                {product.slogan}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {product.description} Explore our diverse range of {product.name.toLowerCase()} subcategories below to find the specific solution tailored to your requirements.
                            </p>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9]"
                        >
                            <img src={productImageMap[product.slug]} alt={product.name} className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {product.subcategories.map((sub, i) => (
                        <motion.div
                            key={sub.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                to={`/products/${product.slug}/${sub.slug}`}
                                className="group block h-full bg-white dark:bg-gray-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-brand-blue/30 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Subcategory Image */}
                                <div className="aspect-[4/3] bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                                    <img
                                        src={subcategoryImageMap[sub.slug] || `https://placehold.co/600x450/f8fafc/94a3b8?text=${sub.name.replace(' ', '+')}`}
                                        alt={sub.name}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                                        {sub.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                                        {sub.description || `High-quality ${sub.name.toLowerCase()} for industrial and agricultural applications. Delivering proven strength and reliability.`}
                                    </p>
                                    <div className="flex items-center text-brand-blue font-bold space-x-2">
                                        <span>View Details</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;
