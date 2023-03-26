import React from 'react';
import { firstData } from '../../dummyData';
import './portfolio.scss';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';
import Portfolio2 from './Portfolio2';
import Portfolio3 from './Portfolio3';

const Portfolio = () => {

    return (
        <div className="portfolio" id="portfolio">

            <div className="featured">
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
                        <h1>Projects</h1>
                        <hr />
                    </div>

                    <div className="bottom">

                        <div className="wrapper">
                            {firstData.map((data) => (
                                <div className="item">

                                    <img src={data.img} alt="" />

                                    <div className="details">
                                        <h3>{data.title}</h3>
                                        <p>{data.desc}</p>
                                        <span>{data.tech}</span>

                                        <div className="buttons">
                                            <a href={data.link} rel="noreferrer" target="_blank">
                                                <button>Live Site</button>
                                            </a>
                                            <a href={data.github} rel="noreferrer" target="_blank">
                                                <button>Github</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Portfolio2 />
            <Portfolio3 />
        </div>
    );

}

export default Portfolio










// import React from 'react';
// import { firstData } from '../../dummyData';
// import './portfolio.scss';
// import { FiGithub } from 'react-icons/fi';
// import { SlSocialLinkedin } from 'react-icons/sl';
// import { RxTwitterLogo } from 'react-icons/rx';
// import Portfolio2 from './Portfolio2';
// import Portfolio3 from './Portfolio3';

// const Portfolio = () => {

//     return (
//         <div className="portfolio" id="portfolio">

//             <div className="left">

//                 <a
//                     href="https://github.com/suehirego"
//                     target="_blank" rel="noopener noreferrer"
//                 >
//                     <FiGithub className="headerIcon" />
//                 </a>

//                 <a
//                     href="https://www.linkedin.com/in/susan-hirego-50b641174/"
//                     target="_blank" rel="noopener noreferrer"
//                 >
//                     <SlSocialLinkedin className="headerIcon" />
//                 </a>

//                 <a
//                     href="https://twitter.com/susanhirego"
//                     target="_blank" rel="noopener noreferrer"
//                 >
//                     <RxTwitterLogo className="headerIcon" />
//                 </a>

//             </div>

//             <div className="right">
//                 <div className="top">
//                 <h1>Projects</h1>
//                     <hr />
//                 </div>

//                 <div className="bottom">

//                     <div className="wrapper">
//                         {firstData.map((data) => (
//                             <div className="item">

//                                 <img src={data.img} alt="" />

//                                 <div className="details">
//                                     <h3>{data.title}</h3>
//                                     <p>{data.desc}</p>
//                                     <span>{data.tech}</span>

//                                     <div className="buttons">
//                                         <a href={data.link} rel="noreferrer" target="_blank">
//                                             <button>Live Site</button>
//                                         </a>
//                                         <a href={data.link} rel="noreferrer" target="_blank">
//                                             <button>Github</button>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <Portfolio2/>
//             <Portfolio3/>
//         </div>
//     );

// }

// export default Portfolio

