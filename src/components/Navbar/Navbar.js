import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Button} from '../Button/Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect( ()=>{
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  PKRANK <i class="fas fa-paw"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/participants" className="nav-links" onClick={closeMobileMenu}>Participant</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/rank" className="nav-links" onClick={closeMobileMenu}>Rank</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>Login</Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn-outline'>LOGIN</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar