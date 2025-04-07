import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Allahundar.css';

function Allahundar() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/66f3d48dacd3cb34a88b303f");
        const data = await res.json();
        setDogs(data.record);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDogData();
  }, []); 

  return (
    <div className="dog-list-container">
      <h2>Alla Hundarna</h2>
      <div className="dogs-gallery">
        {dogs.length === 0 ? (
          <h1>Laddar...</h1>
        ) : (
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {dogs.map((dog) => (
                <Link key={dog.chipNumber} to={`/dog/${dog.chipNumber}`}>
                  <article className="border p-5 rounded my-10">
                    <img
                      src={dog.img}
                      alt={dog.name}
                      loading="lazy"
                      className="rounded md:h-72 w-full object-cover"
                    />
                    <h3>Chip number: {dog.chipNumber}</h3>
                    <h3>Name: {dog.name}</h3>
                    <h3>Age: {dog.age}</h3>
                    <h3>Sex: {dog.sex}</h3>
                    <h3>Breed: {dog.breed}</h3>
                    {dog.present ? (
                    <h3 className="text-green-600">Current: This dog is present.</h3>
                    ) : (
                    <h3 className="text-red-600">Current: This dog is not present.</h3>
          )}
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Allahundar;
