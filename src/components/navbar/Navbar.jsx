import React, { useContext, useState } from 'react';
import './navbar.scss';
import { FaRegMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import Pdf from '../../Documents/Resume.pdf';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {

   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   const [touch, setTouch] = useState(false);
   const handleTouch = () => setTouch(!touch);

   const { dispatch } = useContext(DarkModeContext);


   return (
      <div className='navbar '>
         <div className="wrapper">

            <div className="left">
               <a className='logo' href="#intro">
                  <span>suehiregö</span>
               </a>

               <div className="hamburger">
                  <div className={click ? "menu-icon active" : "menu-icon"} onClick={handleClick}>
                     <span className='line1'></span>
                     <span className='line2'></span>
                     <span className='line3'></span>
                  </div>
               </div>

            </div>

            <div className="right ">
               <ul className={click ? "nav-menu active" : "nav-menu"}>

                  <li className="nav-item" onClick={() => dispatch({ type: "TOGGLE" })}>
                     <div className="darkmode" onClick={handleTouch}>
                        {touch ? <FaRegMoon /> : <HiSun />}
                     </div>
                  </li>

                  <li className="nav-item">
                     <a href="#intro"
                        className={({ isActive }) =>
                           "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                     >
                        Home
                     </a>
                  </li>

                  <li className='nav-item'>
                     <a href="#about"
                        className={({ isActive }) =>
                           "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                     >
                        About
                     </a>
                  </li>

                  <li className='nav-item'>
                     <a href="#portfolio"
                        className={({ isActive }) =>
                           "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                     >
                        Projects
                     </a>
                  </li>

                  <li className='nav-item'>
                     <a href="#contact"
                        className={({ isActive }) =>
                           "nav-links" + (isActive ? " activated" : "")
                        }
                        onClick={closeMobileMenu}
                     >
                        Contact
                     </a>
                  </li>

                  <li className="navBtnWrapper">
                     <a className='navBtn' href={Pdf} without rel="noopener noreferrer" target="_blank">
                        Resume
                     </a>
                  </li>
               </ul>


            </div>
         </div>
      </div>
   )
}

export default Navbar