import React, { useState, useRef } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';
import { FaRegCopyright } from 'react-icons/fa';

const Contact = () => {

    const form = useRef();
    const [message, setMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_esrwo4t', 
            'template_egrpddf', 
            form.current, 
            'user_lhHJ8CQU2Aii1SNDjHIOr'
        )
        .then((result) => {
            console.log(result.text);
            setMessage('Thanks, I will reply ASAP!');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    


    return (
        <div className='contact' id="contact">


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
                    <h1>Contact Me</h1>
                    <hr />
                </div>

                <form ref={form} onSubmit={sendEmail}>

                    <div className="formSec1">

                        <input type="text" name="user_name" placeholder='Full Name' />
                        <input type="email" name="user_email" placeholder='Email' />

                    </div>

                    <textarea name="message" rows="10" placeholder='Message' />
                    <input type="submit" value="Send" className="contactBtn" />
                    {message && <span>Thanks, I will reply ASAP!</span>}

                </form>

                <div className="footer">
                    <hr />
                    <span>Built by Susan Hirego</span>
                    <div className="copyright">
                        <FaRegCopyright />
                        2023
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact