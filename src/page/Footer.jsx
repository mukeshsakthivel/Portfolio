import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';
import { CiLinkedin } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

import '../style/Footer.css'

const Footer = () => {
    return (
        <div className="fullfooter" id='Footer'>
            <div className="itemfooter">
                <div className="uparrowfooter">
                    <MdOutlineKeyboardDoubleArrowUp className='uparrow' />
                </div>
                <ScrollLink to="Home" smooth={true} className="backtotop" >BACK TO TOP</ScrollLink>
                <div className="linkfooter">
                    <a href="https://www.linkedin.com/in/mukesh-s-19668928b/"><CiLinkedin className='iconfooter'/></a>
                    <a href="https://www.instagram.com/m_u_k__e_s_h__/">  <RiInstagramLine className='iconfooter'/></a>
                    <a href="mailto:smukeshcse@gmail.com"><CiMail className='iconfooter'/></a>
                    <a href="https://github.com/mukeshsakthivel"><AiFillGithub className='iconfooter'/></a>
                </div>
                <p className='thank'>Thanks for visiting! Let's stay in touch and build something amazing together.</p>

            </div>
        </div>

    )
}

export default Footer