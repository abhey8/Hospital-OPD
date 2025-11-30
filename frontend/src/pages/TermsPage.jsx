import { Link } from "react-router-dom";

export default function TermsPage() {
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
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h1>

                <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-8 shadow-xl space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-sm text-gray-500">Last updated: November 30, 2025</p>

                    <p>
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the MediHub website and application operated by us.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">2. Accounts</h2>
                    <p>
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">3. Medical Disclaimer</h2>
                    <p>
                        The Service provides information and tools for healthcare management but does not provide medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">4. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features and functionality are and will remain the exclusive property of MediHub and its licensors.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">5. Termination</h2>
                    <p>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">6. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-6">7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at legal@medihub.com.
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
