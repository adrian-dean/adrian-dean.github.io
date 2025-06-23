import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Navy IT Career Guide',
    description: 'A dedicated resource hub explaining Navy IT career paths, NECs, and certifications using TailwindCSS, React, and GitHub Pages.',
    technologies: ['React', 'TailwindCSS', 'Vite', 'GitHub Pages'],
    image: '/images/navy-it-career-guide.png',
    link: 'https://adrian-dean.github.io/navy-it-career-guide',
    github: 'https://github.com/adrian-dean/navy-it-career-guide'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind to showcase education, training, and projects.',
    technologies: ['React', 'TailwindCSS', 'Vite'],
    image: '/images/portfolio-site.png',
    link: 'https://adrian-dean.github.io',
    github: 'https://github.com/adrian-dean/portfolio-site'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-[1.02] transition duration-300 ease-in-out hover:ring-2 hover:ring-teal-400"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-teal-400">{project.title}</h2>
            <p className="text-gray-300 mt-2 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-teal-300 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:underline"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
