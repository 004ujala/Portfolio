import React from 'react';
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub,
    faXTwitter,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="container mainContactdiv">
            <div className="gap-5 d-flex flex-lg-row flex-column justify-content-around align-items-center conatctImgdiv">
                <div className="leftImgdiv">
                    <img src="/contactImg.jpg" alt="Contact" />
                </div>
                <div className="rightContentdiv">
                    <p className='text-center'>Get in Touch</p>
                    <p className='text-center'>Got questions or ideas to share? I’d love to connect!</p>
                    <p className='text-center'>Reach out to me through any of my social media handles below.</p>
                    <p className='text-center'>Whether it's about tech, projects, or a quick chat — I'm just a message away.</p>
                    <p className='text-center'>Let’s build something awesome together!</p>
                </div>
            </div>

            <div className="socialMediaContact mt-3">
                <a href="https://www.instagram.com/adityansharma5" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/adityanarayansharma/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Adinarayanreloaded" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://x.com/Adityansharma5" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=adinarayanofficial@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
