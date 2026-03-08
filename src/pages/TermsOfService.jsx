import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-24 container-custom"
        >
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
                <p>Welcome to Blue World Exports. By accessing our website and services, you agree to comply with the following terms and conditions.</p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Acceptable Use</h2>
                <p>
                    You agree to use this website only for lawful purposes related to inquiring about our industrial and agricultural export products. Unauthorized use of our technical specifications or catalog images is prohibited.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Product Specifications</h2>
                <p>
                    While we strive for accuracy, the technical specifications (GSM, diameter, strength) provided on this site are for general information. Final specifications for export orders will be confirmed in the Proforma Invoice (PI).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. Export Compliance</h2>
                <p>
                    All transactions are subject to international trade laws and the export regulations of India. Buyers are responsible for ensuring that the products (Pipes, Ropes, Tarpaulins, etc.) meet the import standards of their respective countries.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. Limitation of Liability</h2>
                <p>
                    Blue World Exports shall not be liable for any indirect or consequential damages resulting from the use of products after they have been delivered and accepted as per the agreed shipping terms (FOB, CIF, etc.).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">5. Governing Law</h2>
                <p>
                    These terms are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.
                </p>
            </div>
        </motion.div>
    );
};

export default TermsOfService;
