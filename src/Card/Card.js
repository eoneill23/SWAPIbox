import React from 'react';
import './Card.css'

const Card = ({ name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers }) => {
  console.log('card props', homeworld)

  return (
    <section className='Card'>
      <header className='Card-header'>
        <h2>{name}</h2>
        <button>Favorite</button>
      </header>
      <div>
        <p>{homeworld || null}</p>
        <p>{species || null}</p>
        <p>{population || null}</p>
        <p>{terrain || null}</p>
        <p>{climate || null}</p>
        <p>{residents || null}</p>
        <p>{model || null}</p>
        <p>{vehicleClass || null}</p>
        <p>{numberOfPassengers || null}</p>
      </div>
    </section>
  )
}

export default Card;