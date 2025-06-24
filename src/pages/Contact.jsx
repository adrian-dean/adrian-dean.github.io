import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-12 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Me</h1>
        <p className="text-lg mb-10 text-center">
          Want to get in touch? Fill out the form below or connect with me on social platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-md font-semibold text-white"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Socials</h2>
            <div className="flex space-x-6 text-3xl">
              <a
                href="https://github.com/adrian-dean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-teal-400 transition"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-teal-400 transition"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://discord.gg/your-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-teal-400 transition"
                title="Discord Server"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;