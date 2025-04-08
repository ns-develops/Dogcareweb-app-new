import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AdderaHund.css';

function AdderaHund() {
  const [newDog, setNewDog] = useState({
    name: '',
    age: '',
    breed: '',
    sex: '',
    chipNumber: '',
    present: true, 
    img: '',
  });

  const [isInHouse, setIsInHouse] = useState(true); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDog({
      ...newDog,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    

    const dogToAdd = {
      ...newDog,
      present: isInHouse,
    };

    console.log('Dog added:', dogToAdd); 

    navigate('/hundar/allahundarna'); 
  };

  return (
    <div className="addera-hund-container">
      <h2 className="text-center"></h2>
      <form onSubmit={handleSubmit} className="addera-hund-form">
        <div className="form-group">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Hundens namn"
            value={newDog.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Ålder:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Hundens ålder"
            value={newDog.age}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Ras:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            placeholder="Hundens ras"
            value={newDog.breed}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Kön:</label>
          <input
            type="text"
            id="sex"
            name="sex"
            placeholder="Hundens kön"
            value={newDog.sex}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chipNumber">Chipnummer:</label>
          <input
            type="text"
            id="chipNumber"
            name="chipNumber"
            placeholder="Chipnummer"
            value={newDog.chipNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="img">Bild (URL):</label>
          <input
            type="text"
            id="img"
            name="img"
            placeholder="Lägg till en bild (URL)"
            value={newDog.img}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <div>
            <label>
              <input
                type="radio"
                name="present"
                checked={isInHouse}
                onChange={() => setIsInHouse(true)}
              />
              In House
            </label>
            <label>
              <input
                type="radio"
                name="present"
                checked={!isInHouse}
                onChange={() => setIsInHouse(false)}
              />
              Checked Out
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Lägg till Hund</button>
      </form>
    </div>
  );
}

export default AdderaHund;
