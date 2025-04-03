import React from 'react'

function Navbar() {
  return  (
<header>
  <div className='container'>
  <nav>
    <div className='logo'>
        <h2>Happy Dogo</h2>
    </div>
    <ul className='nav-link'>
    <li>
    <a href="/Support">Support</a>
    </li>
    <li>
    <a href="/Hundar">Hundar</a>
    </li>
    <li>
    <a href="/Adminpanel">Admin panel</a>
    </li>
    <li>
    <a href="/Loggaut">Logga ut</a>
    </li>
    </ul>
  </nav>
  </div>
  </header>
  )
}

export default Navbar