import React from 'react'
import './footer.css'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <a href="#" className="footer_logo">Pichet Lekpet</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certificate">Certificate</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://www.facebook.com/"><FaLinkedin /></a>
                <a href="https://www.facebook.com/"><FaGithub /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Pichet Lekpet 2024. All Right Reserved.</small>
            </div>
        </div>
    )
}

export default Footer