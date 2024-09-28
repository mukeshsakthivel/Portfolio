import React from 'react';
import aboutPhoto from '../assets/AboutMe Photo.png';
import { MdCloudDownload } from 'react-icons/md';
import resume from '../resume/Mukesh-resume.pdf';
import { Link as ScrollLink } from 'react-scroll';
import endLine from '../assets/lineimage.png'
import '../style/AboutMe.css';
const AboutMe = () => {
    return (
        <>
        <section id='AboutMe'>
        <div className="fullAbout" >
                <div className='about'>
                    <h1>ABOUT ME</h1>
                </div>
                {/* <div className="startline">
                        <img src={endLine} alt="" />
                </div> */}
                <div className="flex-about">
                    <div className="left-about">
                        <div className="image-about">
                            <img src={aboutPhoto} alt="" />
                        </div>
                    </div>
                    <div className="right-about">
                        <div className="text-about">
                            <p>I am a highly motivated and dedicated developer with expertise in front-end technologies and a strong foundation in Spring Boot, SQL, and MongoDB development. As a fresher, I bring fresh ideas, a passion for innovation, and a commitment to building scalable, efficient, and robust applications. My continuous learning approach drives me to enhance my skills and deliver top-quality results. I thrive in collaborative environments and am eager to contribute to innovative projects that make a meaningful impact.</p>
                        </div>
                        <div className="about-button">
                            <ScrollLink to="Project" smooth={true} className="about-scroll">View Project</ScrollLink>
                            <a download="" href={resume} className="resume-download"> Download Resume<MdCloudDownload className='resume-icon' /></a>
                        </div>
                        <div className="endline">
                        <img src={endLine} alt="" />
                </div>

                    </div>
                </div>
               
            </div>
        </section>
            
        </>
    )
}

export default AboutMe