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
    img: '',  // Will store the image file
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewDog({
          ...newDog,
          img: reader.result,  // Store the image file as a data URL
        });
      };
      reader.readAsDataURL(file);  // Convert image file to data URL
    }
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
          <label htmlFor="img">Välj bild:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"  // Allow only image files
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Image Preview */}
        {newDog.img && (
          <div className="image-preview">
            <h3>Bildförhandsvisning:</h3>
            <img src={newDog.img} alt="Hundbild" className="preview-img" />
          </div>
        )}

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
