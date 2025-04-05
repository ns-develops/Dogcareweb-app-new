import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

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
            </div>
            <ul className={`nav-link ${menuOpen ? 'active' : ''}`}>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/hundar">Hundar</a>
              </li>
              <li>
                <a href="/adminpanel">Adminpanel</a>
              </li>
              <li>
                <a href="/loggaut">Logga ut</a>
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
            <h2>Responsive panel</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
