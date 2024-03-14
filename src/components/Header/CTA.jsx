import React from 'react'
import Resume from '../../assets/Pichet-Lekpet-Resume.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={Resume} download className="btn-main">Download Resume</a>
            <a href="#contact" className="btn-main btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA