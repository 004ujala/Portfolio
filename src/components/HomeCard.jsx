import React from 'react';
import "../css/HomeCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeCard = ({ icon, profileName, content }) => {
    return (
        <div className="homeCard">
            {/* Icon Section */}
            <div className="homeIcon text-center">
                <FontAwesomeIcon icon={icon} size="2x" className='homeCardIcon' />
            </div>

            {/* Profile Name */}
            <div className="profileDetail mt-2">
                <h3 className='text-center'>{profileName}</h3>
            </div>

            {/* Profile Content */}
            <div className="profileContent mt-2">
                <p className='text-center'>{content}</p>
            </div>
        </div>
    );
};

export default HomeCard;
