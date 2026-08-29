import React from 'react';
import hobbiesData from '../data/hobbies.json';
import instagramDp from '../assets/instagram_dp.png';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 px-6 md:px-12 bg-dark-lighter/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Hobbies</h2>
          <div className="h-px bg-gray-700 w-full md:w-64"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <a 
            href={hobbiesData.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all group"
          >
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* Instagram Avatar Ring */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-1 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-dark rounded-full flex items-center justify-center border-4 border-dark overflow-hidden">
                  <img src={instagramDp} alt={hobbiesData.name || hobbiesData.instagramHandle} className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Info */}
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {hobbiesData.name || hobbiesData.instagramHandle}
                </h3>
                {hobbiesData.name && (
                  <p className="text-gray-400 mb-2 font-medium">{hobbiesData.instagramHandle}</p>
                )}
                <p className="text-gray-400 mb-4 text-lg">{hobbiesData.title}</p>
                <p className="text-sm text-gray-500 max-w-lg mb-6 leading-relaxed">
                  {hobbiesData.description}
                </p>
                
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md font-medium group-hover:opacity-90 transition-opacity">
                  View Page on Instagram
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

