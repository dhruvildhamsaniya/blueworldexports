import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Download, ChevronRight, ChevronDown, Check, ChevronLeft } from 'lucide-react';
import productsData from '../data/products.json';
import technicalSpecs from '../data/technicalSpecifications.json';

const SubcategoryDetail = () => {
    const { slug, subslug } = useParams();
    const product = productsData.find(p => p.slug === slug);
    const subcategory = product?.subcategories.find(s => s.slug === subslug);

    const [currentImage, setCurrentImage] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState('features');

    const subcategorySpecs = technicalSpecs[subslug] || (() => {
        // Fallback: look for other subcategories of the same product
        const otherSub = product?.subcategories.find(s => technicalSpecs[s.slug]);
        return otherSub ? technicalSpecs[otherSub.slug] : null;
    })();

    const subcategoryImageMap = {
        'garden-pipe': [
            '/images/products/pipe/Garden pipe/PVC-Garden-Hose-1.jpg',
            '/images/products/pipe/Garden pipe/a6b2dc265fe5b32d3d9245f3b1afdfe3.jpg',
            '/images/products/pipe/Garden pipe/a77f2de4c0cc1adadbc25d3663615988.jpg',
            '/images/products/pipe/Garden pipe/ce54914025855367d5286811b3cab800.jpg',
            '/images/products/pipe/Garden pipe/d84e842049ce95b769dfd266a3df27e7.jpg',
            '/images/products/pipe/Garden pipe/61mTo1ZWcSL._AC_UF1000,1000_QL80_.jpg',
            '/images/products/pipe/Garden pipe/692-6922876_wire-png-transparent-png.png'
        ],
        'suction-pipe': [
            '/images/products/pipe/Suction pipe/pvc-light-duty-suction-hose.jpeg',
            '/images/products/pipe/Suction pipe/91093815991187ce8a4773cf4c1a1f04.jpg',
            '/images/products/pipe/Suction pipe/green-pvc-heavy-duty-hose.jpg',
            '/images/products/pipe/Suction pipe/0e6ca7890d76d2de6081a364f38dc14e.jpg',
            '/images/products/pipe/Suction pipe/0e6ca7890d76d2de6081a364f38dc14e(1).jpg',
            '/images/products/pipe/Suction pipe/1002106.png',
            '/images/products/pipe/Suction pipe/113316e98d1a886698437048003c7ea8.jpg',
            '/images/products/pipe/Suction pipe/Gemini_Generated_Image_2stat62stat62sta.png'
        ],
        'braided-pipe': [
            '/images/products/pipe/Brided pipe/2cc725320a48a42383f1d32b23a37adc.jpg',
            '/images/products/pipe/Brided pipe/69165dcbd1d6428f145f348596028c40.jpg',
            '/images/products/pipe/Brided pipe/6962253b087f7d6a3fb9c4da009e5bbe.jpg',
            '/images/products/pipe/Brided pipe/84a9e82e84d35e11f9d9775b84a5a064.jpg',
            '/images/products/pipe/Brided pipe/9a3196484fc3bd9d341da14f9bcdeab6.jpg',
            '/images/products/pipe/Brided pipe/a61b3ed4a0ca10ede3e40de1dc505a49.jpg',
            '/images/products/pipe/Brided pipe/a9c87bb3a3c0c0814addc98aff75cf8b.jpg'
        ],
        'layflat-pipe': [
            '/images/products/pipe/Lay Flat pipe/LayFlat 1.png',
            '/images/products/pipe/Lay Flat pipe/LayFlat 2.png',
            '/images/products/pipe/Lay Flat pipe/pvc-lay-flat-hose.jpg',
            '/images/products/pipe/Lay Flat pipe/product_thumb_622b3bb3b4716_278.jpg',
            '/images/products/pipe/Lay Flat pipe/water-discharge-hose-w-p-10-bar-lay-flat.jpg'
        ],
        'hdpe-tarpaulin': [
            '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/Yellow-Multilayer-Superpoly-Tarpaulins..jpg',
            '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/e0b69054a25dd64eb1c17df69edd15a3.jpg',
            '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/e213398013b45a324297f1fcca560024.jpg',
            '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/0d00d87e72ddabb72c89ea120fc4a742.jpg',
            '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/112a06e48e70f41d40be7837d7ca2e65.jpg',
            '/images/products/Tarpaulin Photos & videos/HDPE Tarpaulin/5d757825f324061e836ff67173f516be.jpg'
        ],
        'ldpe-tarpaulin': [
            '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/ldpe-tarpaulin-sheet-500x500.webp',
            '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/Weatherproof_Industrial_Tarps.jpg',
            '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/1724949592.1280.1280__82381.jpg',
            '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/2407-202106151106317098.jpg',
            '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/db936f8b539d42e7aa771592fd78ebdc.jpg',
            '/images/products/Tarpaulin Photos & videos/LDPE Tarpaulin/pond-liner-500x500.jpg'
        ],
        'hdpe-rope': [
            '/images/products/rope/hdpe/HDPE Rope 1.png',
            '/images/products/rope/hdpe/HDPE Rope 3.png',
            '/images/products/rope/hdpe/HDPE Rope 4.png',
            '/images/products/rope/hdpe/HDPE Rope 5.png',
            '/images/products/rope/hdpe/HDPE Rope 6.png',
            '/images/products/rope/hdpe/HDPE Rope 8 (1).png'
        ],
        'pp-rope': [
            '/images/products/rope/pp/pp .jpeg',
            '/images/products/rope/pp/pp 10.jpeg',
            '/images/products/rope/pp/pp 11.jpeg',
            '/images/products/rope/pp/pp 12.jpeg',
            '/images/products/rope/pp/pp 7.jpeg',
            '/images/products/rope/pp/pp 8.jpeg',
            '/images/products/rope/pp/pp 9.jpeg'
        ],
        'agriculture-shade-net': [
            '/images/products/Shade net/agriculture/Shade net 1.png',
            '/images/products/Shade net/agriculture/Shade net 2.png',
            '/images/products/Shade net/agriculture/Shade net 3.png',
            '/images/products/Shade net/agriculture/Shade Net 4.png',
            '/images/products/Shade net/agriculture/Shade Net 5.png',
            '/images/products/Shade net/agriculture/Shade Net 10.png',
            '/images/products/Shade net/agriculture/Net_House_770x441.jpg',
            '/images/products/Shade net/agriculture/green-house-net.webp'
        ],
        'construction-scaffold-net': [
            '/images/products/Shade net/construction/Gemini_Generated_Image_axnrytaxnrytaxnr.png',
            '/images/products/Shade net/construction/Gemini_Generated_Image_20hp5m20hp5m20hp.png',
            '/images/products/Shade net/construction/Gemini_Generated_Image_a03jfva03jfva03j.png',
            '/images/products/Shade net/construction/ezcs19ezcs19ezcs.png',
            '/images/products/Shade net/construction/flat-roof-nethouse.jpg'
        ],
        'pp-strap': [
            '/images/products/packaging_strap/PP Strap/PP-Strap-1024x434.jpg',
            '/images/products/packaging_strap/PP Strap/Gemini_Generated_Image_ad7q3kad7q3kad7q.png',
            '/images/products/packaging_strap/PP Strap/Gemini_Generated_Image_aunhr7aunhr7aunh.png',
            '/images/products/packaging_strap/PP Strap/Gemini_Generated_Image_p3trqhp3trqhp3tr.png',
            '/images/products/packaging_strap/PP Strap/WhatsApp Image 2026-02-09 at 7.54.13 PM.jpeg',
            '/images/products/packaging_strap/PP Strap/fc9013c43ba19c9c24b92c97e274c28d.jpg'
        ],
        'pet-strap': [
            '/images/products/packaging_strap/PET Strap/pet-strap-roll3.webp',
            '/images/products/packaging_strap/PET Strap/embossed-pet-straps.jpg',
            '/images/products/packaging_strap/PET Strap/images.jpg',
            '/images/products/packaging_strap/PET Strap/09a0eedc-b16f-4f2d-9473-d9056906be16.png',
            '/images/products/packaging_strap/PET Strap/d6ad602a866d905dfc5af013ebbadd70.jpg'
        ]
    };

    const images = subcategoryImageMap[subslug] || [];

    const nextImage = () => {
        if (images.length === 0) return;
        setCurrentImage((prev) => (prev + 1) % images.length);
    };
    const prevImage = () => {
        if (images.length === 0) return;
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (images.length === 0) return;
        const timer = setInterval(() => {
            nextImage();
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length, currentImage]);

    if (!product || !subcategory) {
        return <div className="py-24 text-center">Product or Subcategory not found</div>;
    }

    const accordions = [
        {
            id: 'features',
            title: 'Key Features',
            content: ['UV Stabilized for long life', 'High tensile strength', 'Chemical resistant', 'Weatherproof durability']
        },
        {
            id: 'apps',
            title: 'Applications',
            content: ['Agriculture & Irrigation', 'Industrial Packaging', 'Construction Sites', 'Logistics & Warehousing']
        },
        {
            id: 'sizes',
            title: 'Available Sizes',
            content: ['Standard industrial sizes', 'Customizable dimensions on order', 'Various thickness options']
        },
        {
            id: 'colours',
            title: 'Colours',
            content: ['Blue', 'Black', 'Yellow', 'Custom colors upon request']
        }
    ];

    // Swipe handlers for framer-motion
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 md:py-24"
        >
            <div className="container-custom">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-12">
                    <Link to="/" className="hover:text-brand-blue">Home</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link to="/products" className="hover:text-brand-blue">Products</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link to={`/products/${product.slug}`} className="hover:text-brand-blue">{product.name}</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white font-bold">{subcategory.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 mb-16">
                    {/* Left: Image Slider */}
                    <div className="lg:w-1/2">
                        <div className="sticky top-32">
                            {/* Main Image Carousel */}
                            <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-3xl mb-6 overflow-hidden flex items-center justify-center group">
                                <AnimatePresence initial={false}>
                                    <motion.img
                                        key={currentImage}
                                        src={images[currentImage] || `https://placehold.co/600x600/e2e8f0/475569?text=${subcategory.name.replace(' ', '+')}`}
                                        alt={`${subcategory.name} ${currentImage + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = swipePower(offset.x, velocity.x);
                                            if (swipe < -swipeConfidenceThreshold) {
                                                nextImage();
                                            } else if (swipe > swipeConfidenceThreshold) {
                                                prevImage();
                                            }
                                        }}
                                    />
                                </AnimatePresence>

                                {/* Controls */}
                                <button onClick={prevImage} className="absolute left-4 p-2 bg-white/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-gray-900 hover:bg-white/90 shadow-md">
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button onClick={nextImage} className="absolute right-4 p-2 bg-white/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-gray-900 hover:bg-white/90 shadow-md">
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-4 gap-4">
                                {(() => {
                                    const windowSize = 4;
                                    const totalImages = images.length;
                                    let startIndex = 0;

                                    if (totalImages > windowSize) {
                                        // Center the window on the current image as much as possible
                                        startIndex = Math.max(0, Math.min(totalImages - windowSize, currentImage - Math.floor(windowSize / 2)));
                                    }

                                    return images.slice(startIndex, startIndex + windowSize).map((img, i) => {
                                        const actualIndex = startIndex + i;
                                        return (
                                            <div
                                                key={actualIndex}
                                                onClick={() => setCurrentImage(actualIndex)}
                                                className={`aspect-square bg-white dark:bg-gray-950 border-2 rounded-xl cursor-pointer overflow-hidden transition-all ${currentImage === actualIndex ? 'border-brand-blue shadow-md scale-105' : 'border-gray-100 dark:border-gray-800 opacity-60 hover:opacity-100 font-medium'}`}
                                            >
                                                <img src={img || `https://placehold.co/150x150/e2e8f0/475569?text=Image`} alt="Thumb" className="w-full h-full object-cover" />
                                            </div>
                                        );
                                    });
                                })()}
                            </div>
                        </div>
                    </div>

                    {/* Right: Details & CTAs */}
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{subcategory.name}</h1>
                        <p className="text-xl text-brand-blue font-semibold mb-6 uppercase tracking-wider">{product.name} Series</p>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                            Premium quality {subcategory.name.toLowerCase()} designed for maximum performance, durability, and reliability across various applications.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=exportsblueworld@gmail.com&su=Inquiry for ${subcategory.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center space-x-2 btn-primary py-4"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Inquiry via Email</span>
                            </a>
                            <a
                                href={`https://wa.me/918758730666?text=Hi, I am interested in ${subcategory.name}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Inquiry via WhatsApp</span>
                            </a>
                        </div>

                        {/* Accordions */}
                        <div className="space-y-4">
                            {accordions.map(acc => (
                                <div key={acc.id} className="border-b border-gray-100 dark:border-gray-800 pb-4">
                                    <button
                                        onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                                        className="w-full flex items-center justify-between py-4 text-left font-bold text-lg group"
                                    >
                                        <span className="group-hover:text-brand-blue transition-colors">{acc.title}</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === acc.id ? 'rotate-180 text-brand-blue' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeAccordion === acc.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <ul className="space-y-3 py-2">
                                                    {acc.content.map((item, i) => (
                                                        <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                                                            <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
                    {subcategorySpecs && subcategorySpecs.length > 0 ? (
                        <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <table className="w-full text-left border-collapse bg-white dark:bg-gray-950">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                                        {Object.keys(subcategorySpecs[0]).map((header, idx) => (
                                            <th key={idx} className="p-5 font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm whitespace-nowrap">
                                                {header.replace('Field_', 'Property ').replace('nan', 'Details')}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {subcategorySpecs.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                                            {Object.values(row).map((val, j) => (
                                                <td key={j} className={`p-5 text-gray-700 dark:text-gray-300 ${j === 0 ? 'font-semibold' : ''}`}>
                                                    {val === null || val === 'nan' ? '-' : val}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-12 text-center bg-gray-50 dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
                            <p className="text-gray-500 italic">Detailed technical specifications for this specific variant are available upon request.</p>
                        </div>
                    )}
                </div>

                {/* Primary CTA Section & Brochure */}
                <div className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white mb-24 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to place an order?</h2>
                        <p className="text-blue-100 mb-8 text-lg">Contact our sales team today for a custom quote on the {subcategory.name}. We ship globally with competitive pricing.</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-lg hover:shadow-xl">
                                Contact Sales
                            </Link>
                            <a
                                href={`/downloads/${product.slug}-${subcategory.slug}.pdf`}
                                download
                                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto group"
                            >
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                <span>Download Brochure</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Related Products Carousel (Simplified Grid for now) */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-center">Other Products in {product.name} Series</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {product.subcategories.filter(s => s.slug !== subcategory.slug).map(sub => (
                            <Link
                                to={`/products/${product.slug}/${sub.slug}`}
                                key={sub.slug}
                                className="group block bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-brand-blue/30 transition-all font-display"
                            >
                                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                                    <img
                                        src={subcategoryImageMap[sub.slug]?.[0] || `https://placehold.co/400x300/f8fafc/94a3b8?text=${sub.name.replace(' ', '+')}`}
                                        alt={sub.name}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="font-bold text-lg group-hover:text-brand-blue transition-colors line-clamp-1">{sub.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SubcategoryDetail;
