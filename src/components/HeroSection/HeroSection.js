import React from 'react'
import { Button } from '../Button/Button'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={process.env.PUBLIC_URL + '/videos/video.mp4'} playsInline loop autoPlay muted allowfullscreen='false'/>
            <div className="text-container">
                <h1 style={{color:'red'}}>PK</h1><h1>&nbsp;OR&nbsp;</h1><h1 style={{color:'green'}}>POOR</h1><h1>?</h1>
            </div>
            <p>The Ranking for PK</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">GET STARTED</Button>
            </div>
        </div>
    );
}

export default HeroSection