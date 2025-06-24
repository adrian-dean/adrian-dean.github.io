import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 transition-colors duration-300">
        {/* Hero Section */}
        <section className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-500 dark:text-teal-400">Adrian Dean</h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200">Information Systems Technician</p>
          <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-500 dark:text-teal-400" />
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
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md p-4 shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">System Administrator</h3>
              <p className="text-gray-700 dark:text-gray-300">United States Navy • 07/2025 – Present</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md p-4 shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Information Systems Technician</h3>
              <p className="text-gray-700 dark:text-gray-300">United States Navy • 03/2025 – Present</p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-6">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md p-4 shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Project Title {i}</h3>
                <p className="text-gray-700 dark:text-gray-300">Brief description of project {i} goes here.</p>
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
    </PageWrapper>
  );
};

export default Home;