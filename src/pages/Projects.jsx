import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal website to showcase my Navy IT career and projects.',
    tech: ['React', 'Tailwind', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Cyber Security Tracker',
    description: 'Logs and monitors training certifications and cyber readiness.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Deployment Scrapbook',
    description: 'Creative digital scrapbook for loved ones before deployment.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const techOptions = ['All', 'React', 'Tailwind', 'JavaScript', 'Node.js', 'MongoDB', 'HTML', 'CSS'];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects =
    selectedTech === 'All'
      ? projectsData
      : projectsData.filter(project => project.tech.includes(selectedTech));

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 md:p-12 transition-colors duration-300">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Projects</h1>

      {/* Tech Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {techOptions.map(tech => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full border transition duration-300 ease-in-out transform text-sm md:text-base ${
              selectedTech === tech
                ? 'bg-teal-500 border-teal-400 text-white'
                : 'bg-gray-100 text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-500 animate-fade-in border border-transparent hover:border-teal-400"
          >
            <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-1">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="bg-teal-700 text-white text-xs px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;