import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navigation Header */}
            <nav className="backdrop-blur-xl bg-white/80 border-b border-white/20 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            MediHub
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/login" className="px-6 py-2 text-gray-700 font-semibold hover:text-blue-600 transition">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>

                <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-8 shadow-xl space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: November 30, 2025</p>

                    <p>
                        At MediHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our application.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us when you register, book appointments, or communicate with us. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Personal identification information (Name, email address, phone number, etc.)</li>
                        <li>Medical history and health records (stored securely and encrypted)</li>
                        <li>Payment information (processed by secure third-party gateways)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, operate, and maintain our services</li>
                        <li>Process your appointments and prescriptions</li>
                        <li>Send you updates, reminders, and security alerts</li>
                        <li>Improve our AI algorithms (using anonymized data only)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">3. Data Security</h2>
                    <p>
                        We implement top-tier security measures, including blockchain technology and AES-256 encryption, to protect your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">4. Sharing of Information</h2>
                    <p>
                        We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@medihub.com.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="backdrop-blur-xl bg-white/80 border-t border-white/20 py-8 mt-12">
                <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
                    <p>&copy; 2025 MediHub - Hospital OPD Management System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
