import React from 'react';
import profileData from '../data/profile.json';

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-dark border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={profileData.links.linkedin} target="_blank" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
          <a href={profileData.links.leetcode} target="_blank" className="text-gray-400 hover:text-primary transition-colors">Leetcode</a>
          <a href={profileData.links.github} target="_blank" className="text-gray-400 hover:text-primary transition-colors">Github</a>
        </div>
        <p className="text-gray-600 text-sm">
          Designed & Built by {profileData.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
