import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to backend
        console.log("Contact form submitted:", formData);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-8 shadow-xl h-fit">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">
                            Have questions about MediHub? We're here to help. Fill out the form or reach out to us directly.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-700">
                                <span className="text-xl">📧</span>
                                <span>support@medihub.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <span className="text-xl">📍</span>
                                <span>123 Healthcare Ave, Tech City, IN</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <span className="text-xl">📞</span>
                                <span>+91 123 456 7890</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-8 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
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
