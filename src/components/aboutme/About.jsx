import React from 'react';
import './about.scss';
import { TbArrowBadgeRight } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';

const About = () => {
   return (
      <div className='about' id="about">

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

            <div className="top">
               <h1>About Me.</h1>
               <hr className='hr' />
            </div>

            <div className="bottom">

               <div className="left">

                  <div className="leftText">
                     <span> I'm a MERN stack Web Developer based in Uganda.
                         My interest in web development started back in 2016 when I founded a non-profit
                        Organisation. With limited resources,
                        free and open source platforms were the only option I had to put up a website for</span>
                     <a href="https://regofoundation.org/" target="_blank" rel="noreferrer" >my Organisation.</a>
                  </div>

                  <div className="leftText">
                     <span>In a couple of days, I had a website up and running, this elevated my curiosity 
                        to learn and through my networks, I landed a full-stack web
                        development scholarship at</span>
                     <a href="https://codeop.tech/" target="_blank" rel="noreferrer" >CodeOp.</a>
                  </div>

                  <div className="leftText">
                     <span> Today, I am focusing on a new career path in Software Engineering and I have
                        built some amazing products with the following technologies:</span>
                     <div className="leftTextList">
                        <ul>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              JavaScript
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              React.js
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              Node.js
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              HTLM5
                           </li>
                        </ul>

                        <ul>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              CSS
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              SASS
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              Tailwind CSS
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              React Native - currently learning
                           </li>
                        </ul>

                     </div>
                  </div>

               </div>

               <div className="right">
                  <div className="imgWrapper">
                     <img src="assets/susanNew.png" alt="" />
                  </div>
                  
               </div>


            </div>
         </div>

      </div>
   )
}

export default About