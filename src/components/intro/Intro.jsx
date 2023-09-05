import React from 'react';
import './intro.scss';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';


const Intro = () => {
   return (
      <div className='intro' id="intro">

         <div className="left">
            <a
               href="https://github.com/suehirego"
               target="_blank" rel="noopener noreferrer"
            >
               <FiGithub className="headerIcon" />
            </a>

            <a
               href="https://www.linkedin.com/in/susan-hirego-50b641174/"
               target="_blank" rel="noopener noreferrer"
            >
               <SlSocialLinkedin className="headerIcon" />
            </a>

            <a
               href="https://twitter.com/susanhirego"
               target="_blank" rel="noopener noreferrer"
            >
               <RxTwitterLogo className="headerIcon" />
            </a>

         </div>

         <div className="right">

            <p>Hello,my name is  </p>
            <h1>Susan Hirego,</h1>
            <h2>I am a full-stack software developer.</h2>

            <a href="#contact">
            <button className='contactBtn'>Contact me!</button>
            </a>

         </div>

      </div>
   )
}

export default Intro