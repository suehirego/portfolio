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
               href="https://www.linkedin.com/in/susanhirego/"
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
               <hr className='hr'/>
            </div>

            <div className="bottom">

               <div className="left">

                  <div className="leftText">
                     {/* <span> I'm a MERN stack Web Developer based in Uganda.
                         My interest in web development started back in 2016 when I founded a non-profit
                        Organisation. With limited resources,
                        free and open source platforms were the only option I had to put up a website for</span>
                     <a href="https://regofoundation.org/" target="_blank" rel="noreferrer" >my Organisation.</a> */}
                     <span>I started out  with Project Management in a community-based nonprofit organization where I picked up 
                        lots of teamwork, communication, problem-solving and project evaluation skills until I 
                        transitioned into Tech 3 years ago through <a href="https://codeop.tech/" target="_blank" rel="noreferrer" >CodeOp.</a>
                     </span>
                  </div>

                  {/* <div className="leftText"> */}
                     {/* <span>In a couple of days, I had a website up and running, this elevated my curiosity 
                        to learn and through my networks, I landed a full-stack web
                        development scholarship at</span>
                     <a href="https://codeop.tech/" target="_blank" rel="noreferrer" >CodeOp.</a> */}
                     
                  {/* </div> */}

                  <div className="leftText">
                  <span>Today, I am focusing on a career path in Software Engineering where I specialise in MERN stack development
                        to build impactful products for companies and budding entrepreneurs. 
                        I have built some amazing products with the following technologies:
                     </span>
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
                              CSS & SASS
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              MYSQL
                           </li>
                           <li>
                              <TbArrowBadgeRight className='icon' />
                              MONGO DB
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