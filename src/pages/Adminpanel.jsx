import React, { useState } from 'react';
import './Adminpanel.css';

function Adminpanel() {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    organizationNumber: '',
    id: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 1000); 
    return `org-${timestamp}-${randomPart}`;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

 
    const newId = generateUniqueId();

  
    setFormData({
      ...formData,
      id: newId, 
    });


    console.log('New Organization Info:', {
      ...formData,
      id: newId,
    });

   
  };

  return (
    <div className="admin-panel">
      <div className="form-container">
        <h2>Företagsinformation</h2>
        <form onSubmit={handleSubmit}>
          <label>Företagsnamn</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Företagsnamn"
          />

          <label>Adress</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Adress"
          />

          <label>Postnummer</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            placeholder="Postnummer"
          />

          <label>Telefonnummer</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Telefonnummer"
          />

          <label>Mejladress</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Mejladress"
          />

          <label>Organisationsnummer</label>
          <input
            type="text"
            name="organizationNumber"
            value={formData.organizationNumber}
            onChange={handleInputChange}
            placeholder="Organisationsnummer"
          />

          <button type="submit">Spara</button>
        </form>
      </div>
    </div>
  );
}

export default Adminpanel;
