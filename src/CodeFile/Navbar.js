import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png";

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const WebInformation = () => {    
        alert('Website : Top Of Drone \nDeveloped by : Nicolas Dubuisson \nMàJ : 10/07/2022 \nLanguage : ReactJS ');  
    }

    return (
        <nav className="navbar">

            <Link to="/" className ="navbar-logo">
                TOD  <img src={logo}/>
            </Link>

            <div className="menu-bar" onClick={handleClick}>
                <span className = "material-symbols-outlined">
                    {click? "close": "menu"}
                </span>
            </div>

            <ul className = {click? "nav-menu active":"nav-menu"}>

                <Link to = "/" className="nav-link" onClick={closeMobileMenu}>
                    Home
                </Link>
                
                <Link to = "/Components" className="nav-link" onClick={closeMobileMenu}>
                    Components
                </Link>

                <Link to = "/Software" className="nav-link" onClick={closeMobileMenu}>
                    Software
                </Link>

                <Link to = "/Important" className="nav-link" onClick={closeMobileMenu}>
                    Important
                </Link>
                <a className="nav-link" onClick={WebInformation}>
                    Information
                </a>
            </ul>
        </nav>
    )
}

export default Navbar
