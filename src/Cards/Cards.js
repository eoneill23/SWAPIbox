import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ people, planets, vehicles, films }) => {
  console.log('Cards array', people)
  let peopleList = people.map(person => {
    return <Card key={person.name + Date.now()} name={person.name} homeworld={person.homeworld} species={person.species} population={person.population}/>
  })

  let planetList = planets.map(planet => {
    return <Card key={planet.name + Date.now()} name={planet.name} terrain={planet.terrain} population={planet.population} climate={planet.climate} residents={planet.residents}/>
  })

  let vehicleList = vehicles.map(vehicle => {
    return <Card key={vehicle.name + Date.now()} name={vehicle.name} class={vehicle.vehicle_class} numberOfPassengers={vehicle.numberOfPassengers} />
  })

  return (
    <>
      <section>{peopleList}</section>
      <section>{planetList}</section>
      <section>{vehicleList}</section>
    </>
  )
}

export default Cards;