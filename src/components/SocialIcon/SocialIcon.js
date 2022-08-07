import React from 'react'
import './SocialIcon.css'
const SocialIcon = () => {
    return (
        <div>
            <div className="social">
                <a href="/">
                    <div className="social-btn color-facebook">
                        <div className="icons8-facebook-app"></div>
                        <p className="order-1 google-font margin-facebook">Facebook </p>
                    </div>
                </a>
                <a href="/">
                    <div className="social-btn color-instagram">
                        <div className="icons8-instagram"></div>
                        <p className="order-1 google-font margin-instagram">instagram </p>
                    </div>
                </a>
                <a href="/">
                    <div className="social-btn color-whatsapp">
                        <div className="icons8-whatsapp"></div>
                        <p className="order-1 google-font margin-instagram">whatsapp </p>
                    </div>
                </a>
            </div>


        </div>
        
    )
}

export default SocialIcon