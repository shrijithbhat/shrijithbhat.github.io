import React from 'react';
import profileData from '../data/profile.json';

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-6 md:px-12 bg-dark">
      <div className="container mx-auto max-w-6xl mb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Publications</h2>
          <div className="h-px bg-gray-700 w-full md:w-64"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center md:text-left">

        <div className="bg-dark-lighter border-2 border-primary rounded-xl p-8 shadow-xl shadow-primary/10 hover-3d relative overflow-hidden group">
          {/* Decorative badge */}
          <div className="absolute top-0 right-0 bg-primary text-dark text-xs font-bold px-4 py-1 rounded-bl-lg">
            Published
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 pr-16">
            Implementation of Kannada Sign Language Recognition using Machine Learning
          </h3>
          <p className="text-primary font-medium mb-6">International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE)</p>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            A comprehensive research paper detailing the methodology, architecture, and results of developing a real-time sign language detection system. The study highlights the use of computer vision and machine learning (OpenCV, Python) trained on a robust custom dataset of over 15,000 gestures, featuring a practical case study focused on accessibility and inclusivity.
          </p>

          <a 
            href={profileData.links.ijarcce_paper} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-dark transition-all"
          >
            Read Full Paper
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
