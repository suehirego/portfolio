import React, { useState, useEffect } from 'react';
import PortfolioList from './PortfolioList';
import { fullData, frontData } from '../../dummyData';
import './portfolio.scss';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';

const Portfolio = () => {

    const [selected, setSelected] = useState("fullstack");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "fullstack",
            title: "Fullstack Development",
        },
        {
            id: "front",
            title: "Frontend Development",
        },

    ];

    useEffect(() => {
        switch (selected) {
            case "full":
                setData(fullData);
                break;
            case "front":
                setData(frontData);
                break;

            default:
                setData(fullData);

        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">

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
                    <h1>Portfolio</h1>
                    <hr />
                </div>

                <div className="bottom">
                    <ul>
                        {list.map((item) => (
                            <PortfolioList
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id}
                            />
                        ))}
                    </ul>
                    <div className="wrapper">
                        {data.map((d) => (
                            <div className="item">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                                <h3>{d.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Portfolio