import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import image from "../assets/photo.jpg";
import Navbar from '../component/NavBar'
import { Link as ScrollLink } from 'react-scroll';
import '../style/Home.css'
const Home = () => {
    const [changeHover, setChangeHover] = useState(false);
    const setActive=()=>{
        setChangeHover(true);
    }

    const removeActive = () => {
        setChangeHover(false);
    }

  return (
   <>

   
    <section className='home'>
       
        <div className="left-section">
            <div className="content">
                <h1 className='hi'>Hi, I am </h1>
                <h1 className='name'>Mukesh</h1>
                <p>Full-Stack Developer</p>
            </div>
            <div className="social-icon">
                <a href='https://github.com/mukeshsakthivel'><FaGithub className='icon'/></a>
                <a href='https://www.linkedin.com/in/mukesh-s-19668928b/'><TiSocialLinkedinCircular className='icon'/></a>
                <a href='https://www.hackerrank.com/profile/smukeshcse'><SiHackerrank className='icon' /></a>
                <a href='https://leetcode.com/u/Mukesh_code/'><SiLeetcode className='icon'/></a>
            </div>
        </div>

        <div className="right-section">
              <div className="home-menu">
                
                <ul>
                    <li>
                        <ScrollLink to="#" smooth={true} className="hoverClass" onMouseEnter={setActive} onMouseLeave={removeActive}>About Me</ScrollLink>
                     </li>
                    <li>
                        <ScrollLink to="#" smooth={true} className="hoverClass" onMouseEnter={setActive} onMouseLeave={removeActive}> skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="#" smooth={true} className="hoverClass" onMouseEnter={setActive} onMouseLeave={removeActive}>Qualification</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="#" smooth={true} className="hoverClass" onMouseEnter={setActive} onMouseLeave={removeActive}>Project</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="#" smooth={true} className={`home-contact ${changeHover ? 'changeHover' : null}`}>Contact Me</ScrollLink>
                    </li>
                    
                </ul>
            </div>
        </div>


        <div className="right-sectio">


        </div>
        
    </section>
   
   
   </>
  )
}

export default Home