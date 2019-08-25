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
  const favoriteStyle = isFavorite === 'true' ? 'Card favorited' : 'Card';
  const populationReport = population === 'unknown' ? 'Unknown' : parseInt(population).toLocaleString();
  let residentList = null;
  let residentReport = null;


  if (residents) {
    residentList = residents.length === 0 ? null : residents.map(residentName => <li key={residentName}>{residentName}</li>)
  }

  if (residents) {
    residentReport = residents.length === 0 ? <p>Unknown</p> : <ul className='resident-list'>{residentList}</ul>;
  }

  return (
    <section className={favoriteStyle}>
      <header className='Card-header'>
        <div className='Card-name'>
          <h2>{name}</h2>
        </div>
        <div className='favorite-button'>
          <input type='image' id='hilt' name='favorite' cardname={name} cardtype={type} favorite={isFavorite} src={saberSource} onClick={handleClick}/>
          <label htmlFor='favorite'>Favorite</label>
        </div>
      </header>
      <div className='stats'>
        {homeworld && <p>HOMEWORLD: {homeworld}</p>}
        {species && <p>SPECIES: {species}</p>}
        {population && <p>POPULATION: {populationReport}</p>}
        {terrain && <p>TERRAIN: {terrain}</p>}
        {climate && <p>CLIMATE: {climate}</p>}
        {residents && <><div>RESIDENTS :</div> <ul className='resident-list'>{residentReport}</ul></>}
        {model &&<p>MODEL: {model}</p>}
        {vehicleClass && <p>CLASS: {vehicleClass}</p>}
        {numberOfPassengers &&<p>CAPACITY: {numberOfPassengers} Passengers</p>}
      </div>
    </section>
  )
}

export default Card;