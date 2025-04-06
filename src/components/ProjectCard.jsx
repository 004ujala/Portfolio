import React from 'react';
import "../css/ProjectCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ src, liveLink, githubLink, desc }) => {
    return (
        <div className="container mainProjectCard mt-4">
            <div className="projectImg">
                <img src={src} alt="Project" />
            </div>
            <div className="projectIcon">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="iconLink">
                    <FontAwesomeIcon icon={faGlobe} />
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="iconLink">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="projectDescription">
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
