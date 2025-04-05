import React from 'react';
import '../css/EducationCard.css';

const EducationCard = ({ clss, src, nme, type, content }) => {
    return (
        <div className="education-card mt-4">
            <div className="education-card-header">
            </div>
            <h4 className='text-center'>{clss}</h4>
            <div className="education-card-image">
                <img src={src} alt={nme} />
            </div>
            <div className="education-card-body">
                <p className="text-center fw-bold education-type">{type}</p>
                <p className="text-center education-name">{nme}</p>
                <p className="text-center education-content">{content}</p>
            </div>
        </div>
    );
};

export default EducationCard;
