import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      people: [],
      planets: [],
      films: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => this.fetchPeople(data.results))
    .then(people => this.setState({people: people}))
    .catch(error => console.log(error));
  }

  fetchPeople = (people) => {
    const promises = people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({
          
          homeworld: data.name,
          population: data.population,
          name: person.name
         }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises);
  };

  render() {
    let peopleList = this.state.people.map(person => {
      return <>
        <p>{person.name}</p>
        <p>{person.homeworld}</p>
        <p>{person.species}</p>
        <p>{person.language}</p>
        <p>{person.population}</p>
      </>;
    });
    return (
      <main>
        {peopleList}
      </main>
    )
  }
}

export default App;
