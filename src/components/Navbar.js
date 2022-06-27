import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png";
import { Button } from './Button';

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
/* 
    const [button,setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(true);
        }else{
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
 */
    return (
        <nav className="navbar">

            <Link to="/" className ="navbar-logo">
                TRVL  <img src={logo}/>
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

                {/* button && */ <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </ul>
        </nav>
    )
}

export default Navbar
