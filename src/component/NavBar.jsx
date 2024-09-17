import React from 'react'
import '../style/NavBar.css'
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  return (
    <>      
    <div className="navbar sticky">
         <p>Mukesh S</p>
            <div className="navbar-menu">
                
                <ul>
                    <li>
                        <ScrollLink to="#" smooth={true}>About Me</ScrollLink>
                     </li>
                    <li>
                        <ScrollLink to="#" smooth={true}> skills</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="#" smooth={true}>Qualification</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="#" smooth={true}>Project</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="#" smooth={true} className="contact">Contact Me</ScrollLink>
                    </li>
                    
                </ul>
            </div>
        </div>
  
    </>
  
  )
}

export default NavBar