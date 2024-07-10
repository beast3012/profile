import React, { useRef } from 'react';
import Header from './components/header';
import Home from './components/Home';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/buttons/ScrollToTopButton';
import ThemeContextProvider from './components/ThemeContext';
import ModeSwitch from './components/buttons/ModeSwitch';

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
      <ThemeContextProvider>
        <Header scrollToSection={scrollToSection} />
        <div style={{ marginTop: '64px' }}>
        <ModeSwitch />
        <Home ref={homeRef} />
        <Project ref={projectRef} />
        <Skill ref={skillRef} />
        <Contact ref={contactRef} />
        </div>
        <Footer />
        <BackToTop />
      </ThemeContextProvider>
    </>
  );
}

export default App;
