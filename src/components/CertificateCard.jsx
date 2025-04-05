import React from 'react';
import '../css/CertificateCard.css'; // Assuming you want to keep styles separate

const CertificateCard = ({ src, link }) => {
    return (
        <div className="mainCertificateCard mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} alt="Certificate" className="certificate-image" />
            </a>
        </div>
    );
};

export default CertificateCard;
