import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import hilt from '../images/non-chunky-lightsaber-hilt.png'
import saber from '../images/non-chunky-lightsaber.png'

const Card = ({ data, favoriteCard, favoritesArray }) => {
  const { name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers, favorite, type } = data;

  const favoriteStyle = favoritesArray.map(favorite => favorite.name).includes(data.name) ? 'Card favorited' : 'Card';

 
  const saberSource = favoritesArray.map(favorite => favorite.name).includes(data.name) ? saber : hilt;
  // const favoriteStyle = favoritesArray.includes(data.name) ? 'Card favorited' : 'Card';
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
          <input 
            type='image' 
            alt='active/inactive lightsaber showing when card is favorited'
            id='hilt' 
            name='favorite' 
            cardname={name} 
            cardtype={type} 
            favorite={favorite} 
            src={saberSource} 
            onClick={() => favoriteCard(data)} />
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

Card.propTypes = {
  name : PropTypes.string,
  homeworld : PropTypes.string,
  species : PropTypes.string,
  population : PropTypes.number,
  terrain : PropTypes.string,
  climate : PropTypes.string,
  residents : PropTypes.array,
  model : PropTypes.string,
  vehicleClass : PropTypes.string,
  numberOfPassengers : PropTypes.string,
  favorite : PropTypes.string,
  type : PropTypes.string,
  favoriteCard : PropTypes.func
}