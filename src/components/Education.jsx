import React from 'react';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Education</h2>
          <div className="h-px bg-gray-700 w-full md:w-64"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <div key={idx} className="bg-dark rounded-xl overflow-hidden border border-gray-800 hover-3d group flex flex-col h-full shadow-2xl relative">
              {/* Decorative top bar */}
              <div className="h-2 w-full bg-gradient-to-r from-gray-800 to-gray-800 group-hover:from-primary/50 group-hover:to-primary transition-all"></div>
              
              <div className="p-8 flex-grow flex flex-col mt-2">
                <p className="text-primary text-sm font-medium mb-1">{edu.duration}</p>
                <h3 className="text-xl font-bold text-white mb-4 pr-4">{edu.degree}</h3>
                
                <a href={edu.url || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium text-sm mb-4 hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  {edu.institution}
                </a>
                
                <div className="text-gray-400 space-y-3 flex-grow">
                  <p className="text-sm leading-relaxed whitespace-pre-line">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
