import React from 'react';
import './Adminpanel.css';

function Adminpanel() {
  return (
    <div className="admin-panel">
      <div className="form-container">
        <h2>Företagsinformation</h2> 
        <form>
          <label>Företagsnamn</label>
          <input type="text" placeholder="Företagsnamn" />
          
          <label>Adress</label>
          <input type="text" placeholder="Adress" />
          
          <label>Postnummer</label>
          <input type="text" placeholder="Postnummer" />
          
          <label>Telefonnummer</label>
          <input type="text" placeholder="Telefonnummer" />
          
          <label>Mejladress</label>
          <input type="email" placeholder="Mejladress" />
          
          <label>Organisationsnummer</label>
          <input type="text" placeholder="Organisationsnummer" />
          
          <button type="submit">Spara</button>
        </form>
      </div>
    </div>
  );
}

export default Adminpanel;
