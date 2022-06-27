import React from "react";

import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import v1 from "../videos/video_1.mp4";

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src={v1} autoPlay loop muted /> */}
            
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                    WATCH TRAILER 
                    <span class="material-symbols-outlined">
                        play_circle
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;