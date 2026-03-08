import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-24 container-custom"
        >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
                <p>Effective Date: March 8, 2026</p>
                <p>
                    At Blue World Exports, we are committed to protecting the privacy and security of our clients and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your information.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Information Collection</h2>
                <p>
                    We collect information when you fill out our contact form, request a quote, or download our product catalogues. This may include your name, email address, phone number, and company details.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Use of Information</h2>
                <p>
                    The information we collect is used to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries and provide quotes.</li>
                    <li>Process your orders and manage export logistics.</li>
                    <li>Send updates regarding our products and services (only with your consent).</li>
                    <li>Improve our website performance and user experience.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. Data Security</h2>
                <p>
                    We implement industry-standard security measures to prevent unauthorized access, disclosure, or modification of your personal data. All data related to international trade is handled with the highest level of confidentiality.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. Third-Party Sharing</h2>
                <p>
                    We do not sell or trade your personal information. We may share data with trusted logistics and shipping partners only as necessary to fulfill your export orders.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">5. Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, please contact us at exportsblueworld@gmail.com.
                </p>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
