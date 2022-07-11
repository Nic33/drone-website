import React from "react";

import '../../App.css';
import './HeroSection.css';
import {Link} from 'react-router-dom';

//import v1 from "../videos/video_1.mp4";

function HeroSection() {

    return (
        <div className='hero-container'>
            {/* <video src={v1} autoPlay loop muted /> */}
            
            <h1>ABOUT FPV DRONE</h1>
            <p>My experience</p>
            <div className='hero-btns'>

                <button onClick={() => window.open("https://www.nicolasdubuisson.fr/NDcorp.html")}>
                    About Me
                </button>

                <Link to="/Components">
                    <button>
                        Components
                    </button>
                </Link>

                <Link to="/Important">
                    <button>
                        Important
                    </button>
                </Link>

                <Link to="/Software">
                    <button>
                        Software
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;