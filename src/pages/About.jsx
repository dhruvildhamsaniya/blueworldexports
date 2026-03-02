import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Globe2, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-24"
        >
            {/* Section 1: Hero */}
            <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                ONE SOURCE, MULTIPLE SOLUTIONS, GLOBAL STANDARDS.
                            </h1>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                                Blue World Exports is a premier international trade partner specializing in the global export of high-quality industrial and agricultural products, including premium ropes, tarpaulins, shade nets, packaging straps, and industrial pipes. We focus on delivering strength, flexibility, and trust through every shipment we export.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
            </section>

            {/* Section 2: Why Choose Us */}
            <section className="py-24 border-b border-gray-100 dark:border-gray-800">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-3/5">
                            <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
                            <div className="space-y-6">
                                <p className="text-3xl font-bold text-brand-blue">
                                    Strong Roots + Global Reach + Lasting Materials = Blue World Exports
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    Our commitment to excellence ensures that every product leaving our facility meets international quality standards. With a focus on innovation and customer satisfaction, we have built a reputation for reliability in the global market.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-2/5 flex justify-center">
                            <div className="aspect-square bg-white dark:bg-gray-950 rounded-3xl flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl">
                                <img src="/images/brand/quality_assurance.png" alt="Quality Assurance" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Message & Assurance */}
            <section className="py-24 bg-gray-50 dark:bg-gray-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-10 glass-card rounded-3xl">
                            <Award className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We implement rigorous quality checks at every stage of production. From raw material selection to final packaging, our QA team ensures zero-defect delivery.
                            </p>
                        </div>
                        <div className="p-10 glass-card rounded-3xl">
                            <Users className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold mb-4">CEO's Message</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                                "Our journey is defined by the trust our partners place in us. We don't just export products; we export excellence and build long-term relationships based on transparency."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Pillars */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: "Mission", desc: "To provide innovative and sustainable polymer solutions that empower global agriculture and industry." },
                            { icon: Eye, title: "Vision", desc: "To be the most preferred global partner for protective and structural polymer-based materials." },
                            { icon: Shield, title: "Our Edge", desc: "Superior durability, UV resistance, and customized specifications for every client." },
                            { icon: Globe2, title: "Social", desc: "Committed to eco-friendly manufacturing and supporting the communities we operate in." }
                        ].map((pillar, i) => (
                            <div key={i} className="group p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-brand-blue transition-colors">
                                <pillar.icon className="w-10 h-10 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{pillar.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
