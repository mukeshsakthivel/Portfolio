import React from 'react'
import endLine from '../assets/lineimage.png';
import { FaUserGraduate } from "react-icons/fa6";
import { PiCertificateLight } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import '../style/Qualification.css'

const Qualification = () => {
  return (
    <section>
      <div className="fullQualification" id='Qualification'>
      <div className="qualificationbox">
        <h3>Qualification</h3>
      </div>
      <div className="introqualification">
        <p>I have pursued a well-rounded education that has provided me with a strong foundation in computer science and engineering, supported by consistent academic performance and practical learning experiences.</p>
      </div>
      <div className="explorebox">
        <h4>EXPLORE</h4>
      </div>
      <div className="startline-qualificatoin">
        <img src={endLine} alt="" />
      </div>
      <div className="clgscfull">
        <div className="clg">
          <div className="clgimagetitle">
            <FaUserGraduate className='graduation-icon' />
          </div>
          <div className="clgcolum">
            <h3 className='clgtitle'>BACHELOR'S DEGREE</h3>
            <div className="clgcontent">
              <p>Kongunadu College of Engineering and Technology </p>
              <p>CGPA: 7.6</p>
              <p>Year of Graduation: 2025</p>
            </div>
          </div>
        </div>

        <div className="hsc">
          <div className="scimagetit">
            <PiCertificateLight className='hsc-icon' />
          </div>
          <div className="hsccolum">
            <h3 className='hsctitle'>HIGHER SECONDARY SCHOOL</h3>
            <div className="hsccontent">
              <p>Saravana Niketan Matric Hr Sec School</p>
              <p>Percentage: 81%</p>
              <p>Year of Completion: 2021</p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondary">
        <div className="secimage">
          <MdCastForEducation className='sslc-icon' />
        </div>
        <div className="sslccolum">
          <div className="sslctitle">
            <h3>SECONDARY SCHOOL LEAVING CERTIFICATE</h3>
          </div>
          <div className="SSLCCONTENT">
            <p>Saravana Niketan School</p>
            <p>Percentage:79%</p>
            <p>Year of Completion:2019</p>
          </div>
        </div>

      </div>

      <div className="endline-qualificatoin mb-[-3rem]">
        <img src={endLine} alt="" />
      </div>
    </div>
    </section>
    
  )
}


export default Qualification