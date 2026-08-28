import React from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-dark-lighter/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Some Things I've Built</h2>
          <div className="h-px bg-gray-700 w-full md:w-64"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-dark rounded-xl overflow-hidden border border-gray-800 hover-3d group flex flex-col h-full shadow-2xl relative"
            >
              {/* Decorative top bar */}
              <div className="h-2 w-full bg-gradient-to-r from-gray-800 to-gray-800 group-hover:from-primary/50 group-hover:to-primary transition-all"></div>
              
              <div className="p-8 flex-grow flex flex-col mt-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-primary text-sm font-medium mb-1">{project.subtitle}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors pr-10">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-gray-500 text-xs font-mono">{project.date}</span>
                </div>
                
                <div className="text-gray-400 space-y-3 mb-6 flex-grow">
                  {project.details.map((detail, dIdx) => {
                    if (detail.includes('Published Research Paper:')) {
                      return (
                        <a 
                          key={dIdx} 
                          href="#publications" 
                          className="block text-sm leading-relaxed p-3 border border-primary/50 bg-primary/5 rounded-md hover:bg-primary/10 transition-colors text-white mt-4"
                        >
                          <span className="text-primary font-semibold mr-1">Read Paper:</span>
                          {detail.replace('Published Research Paper: ', '')}
                        </a>
                      );
                    }
                    return <p key={dIdx} className="text-sm leading-relaxed">{detail}</p>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

