import React from 'react';
import "../css/ResearchCard.css";

const ResearchCard = ({ src, name, description, link }) => {
    return (
        <div className="mainResearchCard mt-4">
            <div className="researchImg">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={name} />
                </a>
            </div>
            <div className="researchName">
                <h4 className='text-center text-lg-start'>{name}</h4>
            </div>
            <div className="researchDescription">
                {description}
            </div>
        </div>
    );
};

export default ResearchCard;
