import React from 'react'
import './contact.css'
import { MdEmail, MdPhoneEnabled } from "react-icons/md";
import { FaPhoneFlip, FaFacebookMessenger } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <div className="contact__option">
                        <MdEmail />
                        <h4>Email</h4>
                        <h5>pichet.lekpet@gmail.com</h5>
                        <a href="mailto:pichet.lekpet@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </div>
                    <div className="contact__option">
                        <FaFacebookMessenger />
                        <h4>Messenger</h4>
                        <h5>Pichet Lekpet</h5>
                        <a href="http://m.me/100081088095350" target="_blank">
                            Send a messenge
                        </a>
                    </div>
                    <div className="contact__option">
                        <FaPhoneFlip />
                        <h4>Call</h4>
                        <h4>(+66) 84 551 9169</h4>
                    </div>
                </div>
                <form>
                    <div>
                        <label htmlFor="full name">Full name</label>
                        <input type="text" name="name" placeholder="e.g. Pichet Lekpet" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                         <input type="email" name="email" placeholder="e.g. pichet.lekpet@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="your message">Your message</label>
                        <textarea name="message" rows="7" placeholder="Type message" required></textarea>
                    </div>
                    <button type="submit" className="btn-main btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact