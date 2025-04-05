import React from 'react'
import ExperienceCard from './ExperienceCard'
import "../css/Experience.css"
const Experience = () => {
    return (
        <div className='container mainExperience'>
            <h2 className='text-start mt-3'>Experience</h2>
            <div className="row">
                <div className="col-12">
                    <ExperienceCard company="HCLTech" time="Feb 2025 - Present" profile="Supercharged Employee (Software) | Full Time " contents={["I have been selected as HCL Tech Supercharged Employee/Ambassador for extended efforts given in the company for employer and employee well-being in the past year.", "This is the most elite group of people in the company and is the top 1% club across 210+ offices worldwide in 60+ countries, across 60+ innovation labs and 20+ offices in India.", "I am part of the group who represent India on the global map across all HCL Tech Offices and I am glad that I am able to bring Lucknow on the national and global map by this effort."]} />
                </div>
                <div className="col-12">
                    <ExperienceCard company="HCLTech" time="Oct 2024 - Present" profile="Technical Support Engineer (Citrix) | Full Time" contents={["The work is focused on developing and implementing automated testing solutions to ensure high software quality with analysis of the data.", "We have to adapt at collaborating with development teams and leveraging networking skills to enhance problem-solving and improve overall product performance."]} />
                </div>
                <div className="col-12">
                    <ExperienceCard company="HCLTech" time="July 2024 - October 2024" profile="Graduate Engineer Trainee | Full Time" contents={["Design and implement complex systems to drive organizational efficiency and innovation.", "Optimize system performance and troubleshoot issues to ensure seamless operation."]} />
                </div>
                <div className="col-12">
                    <ExperienceCard company="Coding Ninjas" time="May 2024 - August 2024" profile="Mentor (DSA for python) | Intern" contents={["Assist students with their doubts and provide guidance on (DSA) to enhance their understanding.", "Create and refine DSA content to support effective learning and problem-solving skills in coding."]} />
                </div>
                <div className="col-12">
                    <ExperienceCard company="IEEE" time="Aug 2023 - May 2024" profile="Researcher | Part Time" contents={["I was working on different research and review papers which got accepted in International Scopus Indexed.", "and IEEE conferences. This included working on various algorithms and analyzing them to get inferences."]} />
                </div>
                <div className="col-12">
                    <ExperienceCard company="LetsGrowMore" time="Jun 2022- Jul 2022" profile="Data Engineer  | Intern" contents={["Worked as a Data Science Intern at the organization on different problem statements."]} />
                </div>
                <div className="col-12">
                    <ExperienceCard company="IEEE Chandigarh University" time="Sep 2020- Jun 2021" profile="Public Relations and Content Research  | Intern" contents={["I was in the content and social media research team where we worked on searching for the latest tech and taking out insights from it.", "Worked in public relations of the society and talked to speakers and brands for events in the society and created technical content for IEEE CUSB."]} />
                </div>
            </div>
        </div>
    )
}

export default Experience