import { Link } from "react-router-dom";

export default function AboutPage() {
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
            <Link
              to="/signup"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About MediHub</h1>
        
        <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-8 shadow-xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>MediHub</strong>, a revolutionary healthcare platform designed to transform the way outpatient departments operate. 
            Born from a vision to bridge the gap between traditional healthcare management and modern technology, MediHub combines 
            cutting-edge AI, blockchain security, and intuitive design to create a seamless experience for both patients and doctors.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">Our Mission</h2>
          <p>
            Our mission is to make healthcare accessible, efficient, and secure. We believe that technology should empower healthcare providers 
            to focus on what matters most: patient care. By automating administrative tasks, securing medical records with blockchain, 
            and providing AI-driven insights, we are setting a new standard for hospital management systems.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>AI-Powered Assistance:</strong> Our 24/7 intelligent chatbot helps with symptom assessment and scheduling.</li>
            <li><strong>Blockchain Security:</strong> Your medical data is yours. We use blockchain to ensure your records are immutable and secure.</li>
            <li><strong>Seamless Connectivity:</strong> From video consultations to real-time notifications, we keep you connected.</li>
            <li><strong>User-Centric Design:</strong> Built with the latest web technologies for a fast, responsive, and accessible experience.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">The Team</h2>
          <p>
            MediHub is brought to you by a passionate team of developers dedicated to innovation in healthcare technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-800">Aashish Jha</h3>
              <p className="text-sm text-blue-600">Lead Developer</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-800">Subham Sangwan</h3>
              <p className="text-sm text-blue-600">Full Stack Developer</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-800">Harikrushn</h3>
              <p className="text-sm text-blue-600">Backend Specialist</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-800">Abhey Dua</h3>
              <p className="text-sm text-blue-600">Frontend Engineer</p>
            </div>
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
