import React from 'react'
import "../css/Education.css"
import EducationCard from './EducationCard';
import CertificateCard from './CertificateCard';

const Education = () => {
    return (
        <div className="mainEducation">
            <div className="container aboutEducation mt-3">
                <div className="educationImg1">
                    <img src="/educationImg.jpg" alt="Education" />
                </div>
                <div className="educationContent1">
                    {/* Add education content here */}
                    <h2 className='text-center' >My Education Journey</h2>
                    <p className='text-center' > I began my educational journey at City Montessori School, Lucknow (ICSE), where I built a strong academic foundation and developed a passion for learning. I continued under the ICSE board at Seth M. R. Jaipuria School, Lucknow, where I further sharpened my analytical and academic skills. After a brief health break, I resumed my senior secondary education at The Avadh School, Lucknow (CBSE) and focused on preparing for the JEE. For my higher studies, I pursued a B.E. in Computer Science Engineering at Chandigarh University, gaining hands-on experience in AI, ML, and Software Development. Additionally, I earned a Minor Degree in Data Science from IIT Madras, which further enriched my technical skill set.</p>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className='text-center'>Education</h1>
                <div className="row educationDetails">
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <EducationCard clss="Early Education" src="/EducationImgFol/CMS.jpg" nme="CMS" type="Pre-School" content="In primary school, I developed my love for learning and built basics in reading, writing, and math." />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <EducationCard clss="10th" src="/EducationImgFol/SMRJS.jpg" nme="SMRJS" type="Marticulation" content="In 10th grade, I strengthened my analytical thinking, time management, and deepened my interest in technology and problem-solving." />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <EducationCard clss="12th" src="/EducationImgFol/TAS.jpg" nme="TAS" type="Intermediate" content="In 12th grade, I prepared for JEE and the real world through rigorous preparation, building resilience, focus, and problem-solving skills." />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <EducationCard clss="Bachelor's" src="/EducationImgFol/UIE.jpg" nme="UIE" type="University" content="At university, I pursued B.E. in CSE, gaining hands-on experience in software development through rigorous academics and projects." />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="text-center" >Certifications</h1>
                <div className="row certificationDetails">
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <CertificateCard src="/CertificatesImgFol/CN.jpg" link="https://www.linkedin.com/in/adityanarayansharma/details/certifications/" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <CertificateCard src="/CertificatesImgFol/Coursera.jpg" link="https://www.linkedin.com/in/adityanarayansharma/details/certifications/" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <CertificateCard src="/CertificatesImgFol/IITMOD.jpg" link="https://www.linkedin.com/in/adityanarayansharma/details/certifications/" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <CertificateCard src="/CertificatesImgFol/LL.jpg" link="https://www.linkedin.com/in/adityanarayansharma/details/certifications/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
