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
               
                <a href="/Dogcareweb-app-new/support">Support</a> 
              </li>
              <li>
                <a href="/Dogcareweb-app-new/hundar">Hundar</a>
              </li>
              <li>
                <a href="/Dogcareweb-app-new/adminpanel">Adminpanel</a>
              </li>
              <li>
                <a href="/Dogcareweb-app-new/loggaut">Logga ut</a>
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
