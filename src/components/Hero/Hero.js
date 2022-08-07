import React from 'react'
import video from '../../video/video.mp4'
import './Hero.scss'
const Hero = () => {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <div className="hero-details">
                <h1><span style={{color: "red"}}>D</span>eepak <span style={{color: "red"}}>I</span>nterior</h1>
                <p>India's Best Interior Decorator's</p>
                <div className="hero-btn">
                    <button className="btn btn-primary mx-2 fs-5">Get Started</button>
                    <button className="btn btn-danger mx-2 fs-5">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero