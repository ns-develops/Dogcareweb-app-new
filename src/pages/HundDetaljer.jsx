import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./HundDetaljer.css";

const HundDetaljer = () => {
  const [dog, setDog] = useState(null);
  const { chipNumber } = useParams();

  useEffect(() => {
    const fetchDetailsData = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/66f3d48dacd3cb34a88b303f");
        const data = await res.json();
        const foundDog = data.record.find(d => d.chipNumber === chipNumber);
        setDog(foundDog);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetailsData();
  }, [chipNumber]);

  return (
    <div className='container'>
      <Link to="/" className="back-link">Tillbaka</Link>
      {!dog ? (
        <h1>Laddar...</h1>
      ) : (
        <article className="border border-blue-500 p-5 rounded my-10">
          <img src={dog.img} loading="lazy" style={{ height: '300px', width: '300px', objectFit: 'cover' }} className="rounded md:h-72 w-full object-cover" alt={`Dog: ${dog.name}`} />
          <h3 className="text-black text-lg mt-4">Chip number: {dog.chipNumber}</h3>
          <h3 className="text-black">Name: {dog.name}</h3>
          <h3 className="text-black">Age: {dog.age}</h3>
          <h3 className="text-black">Sex: {dog.sex}</h3>
          <h3 className="text-black">Breed: {dog.breed}</h3>
          <br />
          <span className="text-black">Dog Owner:</span>
          <h3 className="text-black">Firstname: {dog.owner.name}</h3>
          <h3 className="text-black">Lastname: {dog.owner.lastName}</h3>
          <h3 className="text-black">Contact: {dog.owner.phoneNumber}</h3>

          {dog.present ? (
           <h3 className="text-green-600">Current: This dog is present.</h3>
          ) : (
            <h3 className="text-red-600">Current: This dog is not present.</h3>
          )}
        </article>
      )}
    </div>
  );
};

export default HundDetaljer;