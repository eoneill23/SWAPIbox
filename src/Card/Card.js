import React from 'react';
import './Card.css'

const Card = ({ name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers }) => {
 
  return (
    <section className='Card'>
      <header className='Card-header'>
        <h2>{name}</h2>
        <button>Favorite</button>
      </header>
      <div className='stats'>
        {homeworld && <p>{homeworld}</p>}
        {species && <p>{species}</p>}
        {population && <p>{population}</p>}
        {terrain && <p>{terrain}</p>}
        {climate && <p>{climate}</p>}
        {residents && <p>{residents}</p>}
        {model &&<p>{model}</p>}
        {vehicleClass && <p>{vehicleClass}</p>}
        {numberOfPassengers &&<p>{numberOfPassengers}</p>}
      </div>
    </section>
  )
}

export default Card;