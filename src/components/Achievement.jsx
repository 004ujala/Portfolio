import React from 'react'
import "../css/Achievement.css"
const Achievement = () => {
    return (
        <div className="container mainAchievement ">
            <div className="gap-5 d-flex flex-lg-row flex-column justify-content-between align-items-center achievementImg">
                <div className="achievementLeftImg">
                    <img src="/achievementImg.jpg" alt="" />

                </div>
                <div className="achievementRightContent">
                    <h2 className='text-center'>Achievements and Awards</h2>
                    <p className='text-center' >My journey began in primary school, where a love for learning led to early recognition in academics and extracurriculars.In high school , I actively participated science exhibitions, coding competitions and leadership roles that sparked my passion for technology.
                        Intermediate taught me how to prepare myself for the rigorous pressure and how to manage my emotions through the journey of life.
                        Entering university, I immersed myself in hands-on projects, internships and technical clubs like IEEE to sharpen my skills and expand my network.
                        Each phase—from classroom curiosity to real-world innovation—has been a stepping stone in shaping me into a purpose-driven engineer.</p>
                </div>
            </div>

            <div className="award mt-5">
                <h2 className='text-center'>Insights</h2>
                <ul>
                    <li>I was the <b>Merit Card Holder for Excellence</b> in Academics and Co-curricular activities in School for <b>three years.</b></li>
                    <li>Scored above <b>ninety five and ninety percentage</b> in class 10th and 12th respectively.
                    </li>
                    <li>Won various <b>awards and certificates in olympiads </b>in school for example in scholastic and mind spark along with SOF.
                    </li>
                    <li>Also won the <b>prize for best speaker in senior category</b> in school for debate in English and Hindi division
                    </li>
                    <li>Along with university studies <b>cleared the qualifiers of IIT Madras (Online) </b>Degree and pursued it.</li>
                    <li>My research papers got accepted in <b>International Scopus indexed and IEEE conferences </b> for publishing.
                    </li>
                    <li>In NPTEL earned both <b>elite and (elite + silver) category</b> for both data mining and software testing.
                    </li>
                    <li>Won the <b>Certificate of Excellence in Soft Skills </b>from Chandigarh University DCPD department.
                    </li>
                    <li>Won the <b> Certificate of Excellence in DSA and Interview Preparation</b> with Python from Coding Ninjas.
                    </li>
                    <li>Among the <b>top 0.001% employees in HCLTech by winning the supercharged employee</b> award from Lucknow.</li>
                </ul>
            </div>

        </div>
    )
}

export default Achievement