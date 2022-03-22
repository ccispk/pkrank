import React from 'react'
import { Button } from '../Button/Button'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={process.env.PUBLIC_URL + '/videos/video.mp4'} playsInline loop autoPlay muted allowfullscreen='false'/>
            <h1>PK OR POOR?</h1>
            <p>The Ranking for PK</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">GET STARTED</Button>
            </div>
        </div>
    );
}

export default HeroSection