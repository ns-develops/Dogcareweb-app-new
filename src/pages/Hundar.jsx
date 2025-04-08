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
        <button className="hundar-btn">Hundar Checked Out</button>
        <button className="hundar-btn">Tidigare Hundar</button>
      </div>
    </div>
  );
}

export default Hundar;
