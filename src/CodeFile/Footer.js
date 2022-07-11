import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className='container'>

        <p className='subscription-heading'>
          More...
        </p>
      
        <div className='link-wrapper'>

          <div className='link-items'>
            <h2>About Me</h2>
            <a href='https://www.nicolasdubuisson.fr/travaux.html' target = "_blank" >Sevenic Studio</a>
            <a href='https://www.nicolasdubuisson.fr/NDcorp.html' target = "_blank"> My Website</a>
            <a href='https://www.nicolasdubuisson.fr/Sevenic_Code/Arduino.html' target = "_blank" >Arduino</a>
          </div>

          <div className='link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <a href='https://www.linkedin.com/in/nicolas-dubuisson-b4b856226/' target = "_blank">Linkedin</a>

          </div>

          <div className='link-items'>
            <h2>Contact</h2>
            <p>sevenicstudio@gmail.com</p>
          </div>
        </div>

        <div className='link-wrapper2'>

          <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
            <img className='CC' alt="Licence Creative Commons" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
          </a>
          <br />Ce(tte) œuvre est mise à disposition selon les termes de la  
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
            Licence Creative Commons Attribution - Pas d'utilisation Commerciale - Pas de Modification 4.0 International
          </a>
          
          <Link to='/' className='footer-logo'>
            TOP OF DRONE
            <img src={logo}/>
          </Link>
        </div>
    </div>
  );
}

export default Footer;