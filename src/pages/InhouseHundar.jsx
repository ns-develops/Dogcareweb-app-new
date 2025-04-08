import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InhouseHundar.css';

function InhouseHundar() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/66f3d48dacd3cb34a88b303f");
        const data = await res.json();
        // Filtrera endast de hundar som är närvarande
        const inhouseDogs = data.record.filter(dog => dog.present);
        setDogs(inhouseDogs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDogData();
  }, []);

  return (
    <div className="main-content">
      <div className="dog-list-container">
        <h2 className="text-center text-3xl font-bold mb-8">Hundar Inhouse</h2>
        <div className="dogs-gallery">
          {dogs.length === 0 ? (
            <h1>Laddar...</h1>
          ) : (
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {dogs.map((dog) => (
                  <Link key={dog.chipNumber} to={`/dog/${dog.chipNumber}`}>
                    <article className="border p-5 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all">
                      <img
                        src={dog.img}
                        alt={dog.name}
                        loading="lazy"
                        className="rounded-md md:h-72 w-full object-cover mb-4"
                      />
                      <h3>Chip number: {dog.chipNumber}</h3>
                      <h3>Name: {dog.name}</h3>
                      <h3>Age: {dog.age}</h3>
                      <h3>Sex: {dog.sex}</h3>
                      <h3>Breed: {dog.breed}</h3>
                      <h3 className="text-green-600">Current: This dog is present.</h3>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InhouseHundar;
