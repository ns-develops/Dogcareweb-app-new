import React from 'react';
import { Link } from 'react-router-dom';
import './Hundar.css';

function Hundar() {
  return (
    <div className="hundar-container">
      <div className="button-container">
        <Link to="/hundar/allahundarna">
          <button className="hundar-btn">Alla hundarna</button>
        </Link>
        <Link to="/hundar/inhouse">
          <button className="hundar-btn">Hundar Inhouse</button>
        </Link>
        <Link to="/hundar/checkedout">
          <button className="hundar-btn">Hundar Checked Out</button>
        </Link>
        <Link to="/hundar/addera">
          <button className="hundar-btn">Lägg till Hund</button>
        </Link>
        <button className="hundar-btn">Tidigare Hundar</button>
        <button className="hundar-btn">Sök</button>
      </div>
    </div>
  );
}

export default Hundar;
