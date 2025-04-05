import React from 'react'
import "../css/About.css"
import AboutCard from './AboutCard';
const About = () => {
    const titles = [
        "📅 2018 - A Turning Point",
        "🏃‍♂ Active Roots",
        "🛋 The Shift",
        "📚 Under Pressure",
        "⚠ Reality Check",
        "💪 The Brave Pause",
        "📖 Rebuilding Phase",
        "🎓 New Chapter - University",
        "🏅 Visible Transformation",
        "🩺 Sports as a Savior",
        "📈 Mind & Body Connection",
        "🔁 Lifelong Journey",
        "💡 My Philosophy"
    ];

    const descriptions = [
        "Seven years ago, I began a life-altering journey that redefined my balance between health, academics, and career.",
        "My childhood was filled with energy and sports, laying the foundation for a healthy lifestyle.",
        "As academic demands grew, I unknowingly slipped into a sedentary lifestyle, trading activity for achievement.",
        "Preparing for JEE pushed my limits, but the long hours took a heavy toll on my health and body.",
        "A health scare in 2017-18 became my wake-up call, urging immediate action to save my life.",
        "With my family’s support, I hit pause on academics to reclaim my health and re-center my life.",
        "I simultaneously worked on my fitness and education, completing my 11th, 12th, and JEE prep with newfound resilience.",
        "University life, even during the pandemic, became a space to build healthy routines and sustain my progress.",
        "Small consistent changes, like choosing fresh food, brought noticeable changes in my physique and confidence.",
        "Engaging in sports reignited my discipline, burned calories, and became a mental anchor through challenges.",
        "Improved health unlocked better focus, higher energy, and academic excellence - proving wellness fuels success.",
        "Though the journey had ups and downs, I stayed committed to the best version of myself, no matter what.",
        "For me, life is not just about achievements, but about living fully, with purpose, health, and heart. ✨🌿"
    ];

    return (
        <div className="mainAbout">
            <div className="aboutBackImg"></div>
            <div className="aboutContent">
                <h2 className=' text-center mt-3'>“Your imperfections make you unique.”</h2>
                <div className="container">
                    {
                        titles.map((title, index) => (
                            <AboutCard key={index} title={title} desc={descriptions[index]} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About