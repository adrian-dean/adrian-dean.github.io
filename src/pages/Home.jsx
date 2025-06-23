import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10 md:px-10 md:py-20">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400">Adrian Dean</h1>
        <p className="text-xl md:text-2xl">Information Systems Technician</p>
        <p className="text-gray-300 flex justify-center items-center gap-2">
          <MapPin className="w-5 h-5 text-teal-400" />
          NC, USA <span role="img" aria-label="USA Flag">🇺🇸</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/adrian-dean" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <Link to="/contact" className="hover:text-teal-400">
            <FaEnvelope className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-4 rounded-xl shadow-md border border-teal-500">
            <h3 className="text-lg font-semibold text-teal-400">System Administrator</h3>
            <p className="text-gray-300">United States Navy • 07/2025 – Present</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md border border-teal-500">
            <h3 className="text-lg font-semibold text-teal-400">Information Systems Technician</h3>
            <p className="text-gray-300">United States Navy • 03/2025 – Present</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 hover:border-teal-400 transition">
              <h3 className="text-lg font-semibold text-teal-400">Project Title {i}</h3>
              <p className="text-gray-300">Brief description of project {i} goes here.</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-600 transition"
          >
            See More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;