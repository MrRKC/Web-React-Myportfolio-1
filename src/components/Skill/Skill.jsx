import React from 'react'
import './Skill.css'
import { FaSquareJs, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt'

const techIcon = [
    {
        img: <FaReact className="react"/>,
    },
    {
        img: <FaSquareJs className="js"/>,
    },
    {
        img: <FaCss3Alt className="css"/>,
    },
    {
        img: <FaHtml5 className="html"/>,
    },
]

const Skill = () => {
    return (
        <section id="skills" className="skills">
            <h5>What Skills I Have</h5>
            <h2>My Skill Set</h2>

            <div className="container skills_container">
                <ul className="Skills_list">
                    {
                        techIcon.map((techIcon, index) =>{
                            return(
                                <Tilt key={index} scale={1.1} transitionSpeed={2500} tiltReverse={true}><li>{techIcon.img}</li></Tilt>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
    
}

export default Skill