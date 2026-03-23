import { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-white dark:bg-gray-950'>
        <Navbar isScrolled={isScrolled} />
        <Hero />
        <div className='section-divider' />
        <About />
        <div className='section-divider' />
        <Skills />
        <div className='section-divider' />
        <Projects />
        <div className='section-divider' />
        <Experience />
        <div className='section-divider' />
        <Education />
        <div className='section-divider' />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
