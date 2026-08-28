import React, { useState } from 'react';
import profileData from '../data/profile.json';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center md:text-left">
        <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Hello, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {profileData.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-8">
          I build scalable web applications.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
          I'm a {profileData.title} specializing in Python, React, and AI integrations. 
          I have a proven track record of architecting backend systems from scratch and building modern AI-driven solutions.
        </p>

        <div className="flex gap-4 justify-center md:justify-start mb-10">
          <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0A66C2] rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-[#0A66C2]/20" title="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href={profileData.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#181717] rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-[#181717]/20 border border-gray-700" title="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href={profileData.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#282828] rounded-full text-[#FFA116] hover:scale-110 transition-transform shadow-lg shadow-[#FFA116]/10 border border-gray-700" title="LeetCode">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.513-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.833-1.452l2.695-2.616c.514-.515.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038z"/></svg>
          </a>
          <a href={profileData.links.hackerrank} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#282828] rounded-full text-[#2EC866] hover:scale-110 transition-transform shadow-lg shadow-[#2EC866]/10 border border-gray-700" title="HackerRank">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.981 0C5.353 0 0 5.38 0 12.019s5.353 12.019 11.981 12.019C18.61 24.038 24 18.658 24 12.019 24 5.38 18.61 0 11.981 0zM7.228 17.514V6.447h2.38v4.22h4.743v-4.22h2.38v11.067h-2.38v-4.526h-4.744v4.526H7.228z"/></svg>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
          <a href="#projects" className="px-8 py-4 bg-primary text-dark font-semibold rounded-md hover-3d text-center w-full sm:w-auto">
            Check out my work
          </a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 border border-primary text-primary font-semibold rounded-md hover-3d text-center whitespace-nowrap w-full sm:w-auto"
          >
            Get in touch
          </button>
          {/* 
          <a 
            href={profileData.links.resume || "/SRIJITH_S_BHAT_Resume.pdf"} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-md hover-3d text-center whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Resume
          </a>
          */}
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-dark-lighter border border-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl z-10 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-gray-400 mb-6 text-sm">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex items-center justify-between bg-dark p-4 rounded-lg border border-gray-700 mb-6">
              <span className="text-gray-200 font-mono text-sm truncate mr-4">{profileData.email}</span>
              <button 
                onClick={handleCopy}
                className="text-primary hover:text-white transition-colors flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 text-sm font-medium whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            
            <a 
              href={`mailto:${profileData.email}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-dark font-semibold rounded-md hover:bg-primary/90 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Open Default Mail App
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

