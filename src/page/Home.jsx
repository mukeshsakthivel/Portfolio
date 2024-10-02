import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import { Link as ScrollLink } from 'react-scroll';
import '../style/Home.css';  // Assuming you have the necessary styles
import homePhoto from '../assets/frontimage.webp';

const Home = () => {
  return (
    <section className='home' id='Home'>
      <div className="left-section">
        <div className="content">
          <h1 className='hi'>Hi, I am</h1>
          <h1 className='name'>Mukesh</h1>
          <p>Full-Stack Developer</p>
        </div>

        {/* Social icons section */}
        <div className="social-icon">
          <a href='https://github.com/mukeshsakthivel' target="_blank" rel="noopener noreferrer">
            <FaGithub className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/mukesh-s-19668928b/' target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedinCircular className='icon' />
          </a>
          <a href='https://www.hackerrank.com/profile/smukeshcse' target="_blank" rel="noopener noreferrer">
            <SiHackerrank className='icon' />
          </a>
          <a href='https://leetcode.com/u/Mukesh_code/' target="_blank" rel="noopener noreferrer">
            <SiLeetcode className='icon' />
          </a>
        </div>
      </div>

      {/* Right section with navigation */}
      <div className="right-section">
        <div className="home-menu">
          <ul>
            {/* ScrollLink with smooth scrolling to each section */}
            <li>
              <ScrollLink to="AboutMe" smooth={true} offset={-80} className="hoverClass">
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Skill" smooth={true} offset={-80} className="hoverClass">
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Qualification" smooth={true} offset={-80} className="hoverClass">
                Qualification
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Project" smooth={true} offset={-80} className="hoverClass">
                Project
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Contact" smooth={true} offset={-80} className="home-contact">
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="homeimage">
          <div className="image-abouts">
            <img src={homePhoto} alt="" className='max-h-screen mt-[-5rem] ml-40' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
