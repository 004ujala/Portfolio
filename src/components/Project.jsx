import React from 'react'
import "../css/Project.css"
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className="container mainProject">
            <div className="web mt-4">
                <h2 className='text-center text-lg-start' >Web Projects</h2>
                <div className="row">
                    <div className="d-flex justify-content-around align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/webImgFol/LC.jpg"
                            liveLink="https://lucknowitcity.netlify.app/"
                            githubLink="https://github.com/Adinarayanreloaded/hclAditya"
                            desc="This website describes how the technical landscape is developing in New Lucknow."
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/webImgFol/MN.jpg"
                            liveLink="https://drive.google.com/file/d/1pRXQQ78390yLllemwtnjc0UNFpWzN8E8/view"
                            githubLink="https://github.com/Adinarayanreloaded/MusicNationCombined"
                            desc="An application which uses Spotify with help of which we can predict music recommendations based on the user,  also helps in the genre classification of the song chosen"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/webImgFol/OP.jpg"
                            liveLink="https://adinarayanreloaded.github.io/Adiwebsite/"
                            githubLink="https://github.com/Adinarayanreloaded/Adiwebsite"
                            desc="This is the old portfolio website which I had made during my university days."
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/webImgFol/ZR.jpg"
                            liveLink="https://drive.google.com/file/d/1CxApFsN1JEmkd9My_TyXy-IftgjJvvqY/view"
                            githubLink="https://github.com/Adinarayanreloaded/Zaika"
                            desc="This is website we made for local restaurants in each state so that they can flourish on the national map."
                        />
                    </div>
                </div>
            </div>
            <div className="ai mt-4">
                <h2 className='text-center text-lg-start' >AI/ML Projects</h2>
                <div className="row">
                    <div className="d-flex justify-content-around align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/aiImgFol/HC.jpg"
                            liveLink="https://drive.google.com/file/d/1LUqlVLw1OeDVt7bygI6v2L9_g5-ZaeGC/view"
                            githubLink="https://github.com/Adinarayanreloaded/HandCricket2"
                            desc="This is the first project which I made in university for playing hand cricket with friends"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/aiImgFol/MDPS.jpg"
                            liveLink="https://drive.google.com/file/d/1ZtGADZODMxmCwaY4KxdFSFP7bzVK3dfy/view"
                            githubLink="https://github.com/Adinarayanreloaded/Multiple-Disease-Prediction-System"
                            desc="This is the multiple disease prediction system we created for helping hospitals."
                        />
                    </div>
                </div>
            </div>
            <div className="hardware mt-4">
                <h2 className='text-center text-lg-start' >Hardware Projects</h2>
                <div className="row">
                    <div className="d-flex justify-content-around align-items-center col-lg-3 col-sm-12">
                        <ProjectCard
                            src="/ProjectImgFol/hardwareImgFol/HP.jpg"
                            liveLink="https://drive.google.com/file/d/1IkGeBd8eiQCTSX1FWsb4vIi4uVoKHLwJ/view"
                            githubLink="https://github.com/Adinarayanreloaded/Zaika"
                            desc="We have created a website which provides multiple landing pages and a complete solution for a restaurant website."
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project