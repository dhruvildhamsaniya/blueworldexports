import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success

    React.useEffect(() => {
        document.title = "Blue World Exports | Contact Us - Global Inquiry";
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formsubmit.co/ajax/exportsblueworld@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setFormState('success');
            } else {
                alert('There was an error sending your message. Please try again.');
                setFormState('idle');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error sending your message. Please try again.');
            setFormState('idle');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24"
        >
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-xl">
                        Have a question or looking for a quote? Our team is ready to assist you with global shipping and product specifications.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
                    {/* Contact Details */}
                    <div className="lg:w-2/5 space-y-12">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Corporate Office</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Office No 316, Nakshatra 7 Commercial Complex, Raiya Rd, Near Bapa Sitaram Chowk, Rajkot, Gujarat 360005, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Office: +91 87587 30666</p>
                                        <p className="text-gray-600 dark:text-gray-400">Sales: +91 97259 72924</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email Inquiry</h4>
                                        <p className="text-gray-600 dark:text-gray-400">General: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=exportsblueworld@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">exportsblueworld@gmail.com</a></p>
                                        <p className="text-gray-600 dark:text-gray-400">Sales: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@blueworldexports.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">info@blueworldexports.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex space-x-4">
                            <a href="https://wa.me/919725972924" className="flex-1 flex items-center justify-center space-x-2 py-4 bg-green-600/10 text-green-600 rounded-2xl hover:bg-green-600 hover:text-white transition-all font-bold">
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp Now</span>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@blueworldexports.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 py-4 bg-brand-blue/10 text-brand-blue rounded-2xl hover:bg-brand-blue hover:text-white transition-all font-bold">
                                <Mail className="w-5 h-5" />
                                <span>Email Sales</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-3/5">
                        <div className="p-8 md:p-12 bg-white dark:bg-gray-950 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800">
                            {formState === 'success' ? (
                                <div className="py-20 text-center">
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 scale-110">
                                        <Send className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <button onClick={() => setFormState('idle')} className="btn-primary">Send Another Message</button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                                            <input required name="name" type="text" className="w-full bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-brand-blue focus:bg-white dark:focus:bg-gray-800 outline-none rounded-2xl px-6 py-4 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Company</label>
                                            <input name="company" type="text" className="w-full bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-brand-blue focus:bg-white dark:focus:bg-gray-800 outline-none rounded-2xl px-6 py-4 transition-all" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
                                            <input required name="email" type="email" className="w-full bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-brand-blue focus:bg-white dark:focus:bg-gray-800 outline-none rounded-2xl px-6 py-4 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                                            <input required name="phone" type="tel" className="w-full bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-brand-blue focus:bg-white dark:focus:bg-gray-800 outline-none rounded-2xl px-6 py-4 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Product Interest</label>
                                        <select name="product" className="w-full bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-brand-blue focus:bg-white dark:focus:bg-gray-800 outline-none rounded-2xl px-6 py-4 transition-all appearance-none cursor-pointer">
                                            <option>Select a product</option>
                                            <option>Pipes</option>
                                            <option>Tarpaulins</option>
                                            <option>Ropes</option>
                                            <option>Shade Nets</option>
                                            <option>Packaging Straps</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">Your Message</label>
                                        <textarea required name="message" rows="4" className="w-full bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-brand-blue focus:bg-white dark:focus:bg-gray-800 outline-none rounded-2xl px-6 py-4 transition-all resize-none"></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formState === 'loading'}
                                        className="w-full btn-primary !py-5 flex items-center justify-center space-x-3 text-lg"
                                    >
                                        <span>{formState === 'loading' ? 'Sending...' : 'Send Inquiry'}</span>
                                        <Send className={`w-5 h-5 ${formState === 'loading' ? 'animate-pulse' : ''}`} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
