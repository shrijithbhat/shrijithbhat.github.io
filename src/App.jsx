import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
