import React from 'react'
import '../style/NavBar.css'
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ isVisible }) => {
  return (
    <>      
    <div className={`navbar sticky ${isVisible ? 'visible' : 'hidden'}`}>
         <p>Mukesh S</p>
            <div className="navbar-menu">
                
                <ul>
                    <li>
                        <ScrollLink to="AboutMe" smooth={true} activeClass='active'>About Me</ScrollLink>
                     </li>
                    <li>
                        <ScrollLink to="skill" smooth={true} onClick={() => console.log('Attempting to scroll to skill section')}>Skill</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Qualification" smooth={true} activeClass='active'>Qualification</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Project" smooth={true} activeClass='active'>Project</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Contact" smooth={true} activeClass='active' className="contact">Contact Me</ScrollLink>
                    </li>
                    
                </ul>
            </div>
        </div>
  
    </>
  
  )
}

export default NavBar