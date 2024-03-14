import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h2>Hello, My name's</h2>
                <h1>Pichet Lekpet</h1>
                <h3>I'm a Frontend Developer</h3>
                <CTA />

                <div className="me">
                    <img src={Me} alt="Me" />
                </div>
            </div>
        </header>
    )
}

export default Header