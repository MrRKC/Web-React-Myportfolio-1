import React, { useState } from 'react'
import './certificate.css'
import CertificateData from './CertificateData'
import Tilt from 'react-parallax-tilt'
import { IoMdClose } from "react-icons/io";


const Certificate = () => {
    const [showImg, setShowImg] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState("");
    const [tempTitle, setTempTitle] = useState("");


    const onClickShowImg = (image, title) => {
        // console.warn(image);
        setTempImgSrc(image);
        setShowImg(true);
        setTempTitle(title);
    }

    return (
        <section className="certificate" id="certificate">
            <h5>What Learn I Have</h5> 
            <h2>Certificate</h2>

            <div className={showImg === true ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <h4>{tempTitle}</h4>
                <IoMdClose onClick={() => setShowImg(false)}/>
            </div>

            <div className="container certificate_container">
                { 
                    CertificateData.map((data, index) =>{
                        return (
                            <div key={index} onClick={() => onClickShowImg(data.image, data.title)}>
                                <Tilt scale={1} transitionSpeed={2500} tiltReverse={true} className="certificate_item">
                                    <div className="certificate_item-image">
                                        <img src={data.image} />
                                    </div>
                                </Tilt> 
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Certificate