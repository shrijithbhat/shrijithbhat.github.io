import React, { useState } from 'react';
import experienceData from '../data/experience.json';
import trellixLogo from '../assets/trellix_logo.png';
import nfolksLogo from '../assets/nFolks_Logo.png';
import techcitiLogo from '../assets/techciti)logo.jpg';

const localLogos = {
  "Trellix": trellixLogo,
  "nFolks Data Solutions": nfolksLogo,
  "TechCiti Software": techcitiLogo
};

const CompanyLogo = ({ src, alt }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <div className="w-full h-full bg-primary rounded-full"></div>;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover rounded-full bg-white p-0.5"
      onError={() => setError(true)}
    />
  );
};

const calculateDuration = (durationStr) => {
  try {
    const parts = durationStr.split('–').map(s => s.trim());
    if (parts.length !== 2) return [];
    
    const parseDate = (str) => {
      if (str === 'Present') return new Date();
      const [monthStr, yearStr] = str.split(' ');
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames.indexOf(monthStr);
      return new Date(parseInt(yearStr, 10), month);
    };

    const startDate = parseDate(parts[0]);
    const endDate = parseDate(parts[1]);
    
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1; // Inclusive counting
    
    if (months <= 0) return ["1 mo"];

    const y = Math.floor(months / 12);
    const m = months % 12;

    let res = [];
    if (y > 0) res.push(`${y} yr${y > 1 ? 's' : ''}`);
    if (m > 0) res.push(`${m} mo${m > 1 ? 's' : ''}`);
    
    return [res.join(' ')];
  } catch (e) {
    return [];
  }
};

const ExperienceCard = ({ job, logo, isEven }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = job.achievements.length > 1;
  const isReversed = !isEven;

  return (
    <div className={`relative flex flex-row items-start group is-active w-full mt-8 md:mt-0`}>
      
      {/* Timeline Markers */}
      <div className="flex flex-col items-center gap-2 shrink-0 w-10 z-10 md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2">
        <a 
          href={job.url || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark bg-dark shadow-lg overflow-hidden hover:scale-110 transition-transform hover:ring-2 hover:ring-primary cursor-pointer mb-2"
          title={`Visit ${job.company}`}
        >
          <CompanyLogo src={logo} alt={`${job.company} logo`} />
        </a>
        
        {/* Duration Dots */}
        {calculateDuration(job.duration).map((part, i) => (
          <div key={i} className="bg-dark-lighter border border-primary/30 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full font-mono shadow-[0_0_10px_rgba(197,255,65,0.1)] whitespace-nowrap">
            {part}
          </div>
        ))}
      </div>

      {/* Content Box */}
      <div 
        className={`w-full md:w-[calc(50%-2.5rem)] bg-dark-lighter p-6 rounded-lg border border-gray-800 hover-3d shadow-xl cursor-pointer ml-4 md:ml-0 ${isReversed ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{job.role}</h3>
          <span className="text-primary text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap">{job.duration}</span>
        </div>
        
        <div className="text-gray-400 font-medium mb-4 flex items-center gap-2">
          <span className="hover:text-primary transition-colors">
            @ {job.company}
          </span>
          <span className="text-xs px-2 py-0.5 bg-dark rounded border border-gray-700">{job.type}</span>
        </div>
        
        <ul className="space-y-2 text-sm text-gray-400 mb-2 relative">
          {(isExpanded ? job.achievements : [job.achievements[0]]).map((achievement, aIdx) => (
            <li key={aIdx} className="flex gap-2">
              <span className="text-primary mt-1 shrink-0">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
          {!isExpanded && hasMore && (
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-dark-lighter to-transparent pointer-events-none"></div>
          )}
        </ul>

        {hasMore && (
          <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-4 transition-all">
            {isExpanded ? (
              <>Show less <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></>
            ) : (
              <>Read more <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl mb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Where I've Worked</h2>
          <div className="h-px bg-gray-700 w-full md:w-64"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {experienceData.map((job, idx) => (
            <ExperienceCard key={idx} job={job} logo={localLogos[job.company] || job.logo} isEven={idx % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

