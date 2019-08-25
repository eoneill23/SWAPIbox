import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({data, favoriteCard}) => {
  let cardsList = data.map(datum => {
    const {name, homeworld, species, population, terrain, climate, residents, model, vehicleClass, numberOfPassengers, type, favorite} = datum; 

    return <Card key={name + Date.now()} id={name + Date.now() } type={type} name={name} homeworld={homeworld} species={species} population={population} terrain={terrain} climate={climate} residents={residents} model={model} vehicleClass={vehicleClass} numberOfPassengers={numberOfPassengers} isFavorite={favorite} favoriteCard={favoriteCard}/>
  })

  return (
    <div className='Cards'>
      {cardsList}
    </div>
  )

}

export default Cards;