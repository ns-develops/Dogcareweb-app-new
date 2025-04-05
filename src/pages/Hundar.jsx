import React from 'react';
import './Hundar.css';

function Hundar() {
  return (
    <div className="hundar-container">
      <div className="button-container">
        <button className="hundar-btn">Alla hundarna</button>
        <button className="hundar-btn">Hundar Inhouse</button>
        <button className="hundar-btn">Hundar Checked Out</button>
        <button className="hundar-btn">Tidigare Hundar</button>
      </div>
    </div>
  );
}

export default Hundar;
