import React from 'react';
import './Card.css'
import hilt from '../images/non-chunky-lightsaber-hilt.png'
import saber from '../images/non-chunky-lightsaber.png'

const Card = ({ name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers, isFavorite, favoriteCard, type }) => {

  const handleClick = e => {
    const cardname = e.target.getAttribute('cardname');
    const cardtype = e.target.getAttribute('cardtype');
    const favorite = e.target.getAttribute('favorite');
    favoriteCard(cardname, cardtype, favorite);
  } 
  
  const saberSource = isFavorite === 'true' ? saber : hilt;
  return (
    <section className='Card'>
      <header className='Card-header'>
        <h2>{name}</h2>
        <label htmlFor='favorite'>Favorite
          <input type='image' id='hilt' name='favorite' cardname={name} cardtype={type} favorite={isFavorite} src={saberSource} onClick={handleClick}/>
        </label>
      </header>
      <div className='stats'>
        {homeworld && <p>Homeworld: {homeworld}</p>}
        {species && <p>Species: {species}</p>}
        {population && <p>Population: {parseInt(population).toLocaleString()}</p>}
        {terrain && <p>Terrain: {terrain}</p>}
        {climate && <p>Climate: {climate}</p>}
        {residents && <p>Residents: {residents}</p>}
        {model &&<p>Model: {model}</p>}
        {vehicleClass && <p>Class: {vehicleClass}</p>}
        {numberOfPassengers &&<p>Capacity: {numberOfPassengers} Passengers</p>}
      </div>
    </section>
  )
}

export default Card;