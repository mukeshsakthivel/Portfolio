import React, { useEffect, useState } from 'react';
import NavBar from '../component/NavBar';
import Home from '../page/Home';
import AboutMe from '../page/AboutMe';
import Project from '../page/Project';
import { Skill } from '../page/Skill';
import Qualification from '../page/Qualification';
import Contact from '../page/Contact';
import Footer from '../page/Footer';

const PageController = () => {

  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    // Determine if the user has scrolled down more than 100 pixels
    if (window.scrollY > 100) {
      setNavVisible(true); // Show navbar
    } else {
      setNavVisible(false); // Hide navbar
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar isVisible={navVisible}/>
      <Home />
      <section id="AboutMe">
        <AboutMe />
      </section>

      <section id="Skill">
        <Skill />
      </section>

      <section id="Qualification">
        <Qualification />
      </section>

      <section id="Project">
        <Project />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default PageController;
