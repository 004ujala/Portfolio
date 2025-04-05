import React from 'react';
import "../css/ExperienceCard.css"
const ExperienceCard = ({ company, time, profile, contents }) => {
    return (
        <div className="container mainExperienceCard mt-3">
            <h4 className="text-start"><b>{company}</b></h4>
            <h5 className="text-start">{time}</h5>
            <p className="text-start">{profile}</p>
            <ul className="text-start">
                {
                    contents.map((content, index) => (
                        <li key={index} className="text-start" >{content}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExperienceCard;
