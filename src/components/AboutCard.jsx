import React from 'react'

const AboutCard = ({ title, desc }) => {
    return (
        <div className="mainAboutCard mt-5">
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default AboutCard