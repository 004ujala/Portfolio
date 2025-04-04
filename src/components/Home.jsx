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
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faComputer} profileName="Engineer" content="Solve complex problems with innovation.Apply AI/ML and Python expertise.Engage in research and real-world projects." /></div>
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faUser} profileName="SuperCharged Employee" content="Deliver high energy and efficiency. Think proactively and solve problems. Continuously learn and adapt." /></div>
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faPersonChalkboard} profileName="Mentor" content="Guide and inspire peers. Simplify complex concepts. Empower others through knowledge." /></div>
                        <div className='d-flex justify-content-center align-items-center col-lg-3 col-sm-12' ><HomeCard icon={faVolumeHigh} profileName="Public Speaker" content="Present with clarity and confidence. Engage audiences on tech topics. Make knowledge-sharing impactful." /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
