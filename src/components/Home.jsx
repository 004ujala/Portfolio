import React from 'react';
import { faComputer, faUser, faPersonChalkboard, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import '../css/Home.css';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <>
            <div className="mainHome">
                <div className="homeImg">
                    {/* Background Image */}
                </div>
                <div className="homeDetail mt-3">
                    <h1 className="text-center">aditya narayan sharma</h1>
                    <ul className="mt-2">
                        <li>An Engineer with a strong grip on software development and data architecture.</li>
                        <li>Skilled in crafting efficient, scalable solutions for complex problems.</li>
                        <li>Proficient in programming, algorithms, and data structures with quick adaptability.</li>
                        <li>Experienced in freelance projects and thrives in collaborative, cross-functional teams.</li>
                        <li>Driven by innovation and excellence, aiming to build impactful tech solutions.</li>
                    </ul>

                    <div className="container row mt-5">
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faComputer} profileName="Engineer" content="Designing smart, efficient solutions through thoughtful code and innovative systems." /></div>
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faUser} profileName="Supercharged Employee" content="Creating meaningful impact with enthusiasm, accountability and proactive drive." /></div>
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faPersonChalkboard} profileName="Mentor" content="Inspiring growth by offering guidance, insights, and support to others." /></div>
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faVolumeHigh} profileName="Public Speaker" content="Breaking down complex technology into engaging narratives that educate and inspire." /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
