import React, { useState } from 'react'
import './nav.css'

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { TbCertificate } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("");

    return (
        <div className="nav">

            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome />Home</a>     

            {/* <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><BiBook />Skills</a> */}

            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><MdOutlineWorkOutline />Portfolio</a>

            <a href="#certificate" onClick={() => setActiveNav("#certificate")} className={activeNav === "#certificate" ? "active" : ""}><TbCertificate />Certificate</a>

            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><GrContact />Contact</a>
        </div>
    )
}

export default Nav