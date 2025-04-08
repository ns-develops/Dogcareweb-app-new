import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pawImage from '../assets/paw.png';  

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>Happy Dogo</h2>
              <img src={pawImage} alt="Paw Icon" className="paw-icon" />
            </div>
            <ul className={`nav-link ${menuOpen ? 'active' : ''}`}>
              <li>
                <Link to="/support">Support</Link> 
              </li>
              <li>
                <Link to="/hundar">Hundar</Link>
              </li>
              <li>
                <Link to="/adminpanel">Adminpanel</Link>
              </li>
              <li>
                <Link to="/loggain">Logga ut</Link>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="content">
            <h2></h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;