import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-dark-lighter/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">My Skills</h2>
          <div className="h-px bg-gray-700 w-full md:w-64"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx}
                    className="px-3 py-1 bg-dark-lighter text-gray-300 text-sm rounded-md border border-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

