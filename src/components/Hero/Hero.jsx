import React from 'react'
import './hero.css'
import Me from '../../assets/me-about1.jpg'
import Resume from '../../assets/Pichet-Lekpet-Resume.pdf'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt'

const About = () => {
    return (
        <section className="hero">
            <div className="container hero_container">
                <div className="hero_content">
                    <p className="intro">Hi, it's me</p>
                    <h3 className="name">Pichet Lekpet</h3>
                    <p className="rules">Front-end Developer</p>
                    <p className="descpition">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, hic, esse necessitatibus sed minus perferendis, vel nesciunt repellendus corporis rerum id! Aperiam, qui tempora repudiandae maxime distinctio non magni odio exercitationem voluptate similique iure inventore dolorum illum voluptatibus labore debitis! Possimus ut excepturi dolor ea autem dolore eum aspernatur voluptates.
                    </p>
                    <div className="cta">
                        <a href={Resume} download className="btn-main">Download Resume</a>
                        <a href="#contact" className="btn-main btn-primary">Let's Talk</a>
                    </div>
                    <ul className="social_links">
                        <li><a href="https://www.facebook.com/profile.php?id=100081088095350" target='_blank'><FaFacebook /></a></li>
                        <li><a href="https://www.linkedin.com/in/pichet-lekpet-377726285/" target='_blank'><FaLinkedin /></a></li>
                        <li><a href="https://github.com/MrRKC" target='_blank'><FaGithub /></a></li>
                    </ul>  
                </div>
                <div className="hero_me">
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <div className="hero_me-image">
                            <img src={Me} alt="About Me" />
                        </div>
                    </Tilt>
                    
                </div>
            </div>
        </section>
    )
}

export default About