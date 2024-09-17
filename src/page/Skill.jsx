import React from 'react'
import '../style/Skill.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { LiaJsSquare } from "react-icons/lia";
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import endLine from '../assets/lineimage.png'
export const Skill = () => {
  return (
    <div className="fullskill">
      <div className="skillbox">
        <h1>SKILLS</h1>
      </div>
      <div className="allskill">
        <div className="frontend">
          <div className="fronttitle">
            <h3>FRONT-END</h3>
          </div>
          <div className="frontimageskill">
            <FaHtml5 className='html-icon-style' />
            <FaCss3Alt className='css-icon-style' />
            <LiaJsSquare className='js-icon-style' />
            <RiReactjsFill className='react-icon-style' />
          </div>
          <div className="fronttext">
            <div className="html"><h3>HTML</h3></div>
            <div className="css"><h3>CSS</h3></div>
            <div className="js"><h3>JS</h3></div>
            <div className="react"><h3>ReactJS</h3></div>
          </div>
        </div>


        <div className="backend">
          <div className="backtitle">
            <h3>BACK-END</h3>
          </div>
          <div className="backimageskill">
            <FaJava className='java-icon-style' />
            <SiSpring className='spring-icon-style' />
          </div>
          <div className="backtext">
            <div className="java"><h3>JAVA</h3></div>
            <div className="spring"><h3>SPRING BOOT</h3></div>
          </div>
        </div>

        <div className="database">
          <div className="dbtitle">
            <h3>DATABASE</h3>
          </div>
          <div className="dbimageskil">
            <GrMysql className='sql-icon-style' />
            <SiMongodb className='mongo-icon-style' />

          </div>
          <div className="dbtext">
            <div className="sql"><h3>SQL</h3></div>
            <div className="mongodb"><h3>MONGODB</h3></div>
          </div>
        </div>
        <div className="endline-skill">
          <img src={endLine} alt="" />
        </div>
      </div>
    </div>

  )
}