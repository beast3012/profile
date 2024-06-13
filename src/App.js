import React, { useRef } from 'react';
import Header from './components/header';
import Home from './components/Home';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRef = 
      section === 'Home' ? homeRef : 
      section === 'Project' ? projectRef : 
      section === 'Skill' ? skillRef : 
      contactRef;
    
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Home ref={homeRef} />
      <Project ref={projectRef} />
      <Skill ref={skillRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
