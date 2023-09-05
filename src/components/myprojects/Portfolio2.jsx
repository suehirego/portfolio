/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { secondData } from '../../dummyData';
import './portfolio.scss';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';

const Portfolio2 = () => {

    return (
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
                    <h2>Featured Projects</h2>
                    <hr />
                </div>

                <div className="bottom">

                    <div className="wrapper">
                        {secondData.map((data) => (
                            <div className="item">

                                <img src={data.img} alt="" />

                                <div className="details">
                                    <h3>{data.title}</h3>
                                    <p>{data.desc}</p>
                                    <span>{data.tech}</span>

                                    <div className="buttons">
                                        <a href={data.link} rel="noopener" target="_blank">
                                            <button className='button'>Live Site</button>
                                        </a>
                                        {data.github ?
                                            <a href={data.github} rel="noopener" target="_blank">
                                                <button className='button'>Github</button>
                                            </a>
                                            : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Portfolio2