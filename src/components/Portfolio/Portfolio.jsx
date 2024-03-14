import React from 'react'
import './portfolio.css'
import PortfolioData from './PortfolioData'
import Tilt from 'react-parallax-tilt'

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    PortfolioData.map((data, index) =>{
                        return (
                            <Tilt key={index} scale={1} transitionSpeed={2500} tiltReverse={true} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={data.image} alt={data.title} />
                                </div>
                                    <h3>{data.title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={data.github} className="btn-main" target="_blank">
                                        Github
                                    </a>
                                    <a href={data.demo} className="btn-main btn-primary" target="_blank">
                                        Live Demo
                                    </a>
                                </div>
                            </Tilt> 
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio