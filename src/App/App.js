import React, { Component }from 'react';
import './App.css';
import { Route, Navlink } from 'react-router-dom';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import Crawler from '../Crawler/Crawler';


class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      people: [],
      planets: [],
      crawl: {},
      favorites: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => this.fetchPeople(data.results))
      .then(data => this.fetchSpecies(data))
      .then(people => this.setState({ people: people}))
      .catch(error => console.log(error));
      setTimeout(() => {
        console.log('state', this.state)
      }, 3000);

    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => this.fetchResidents(data.results))
      .then(planets => this.setState({ planets: planets}))
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => this.fetchVehicles(data.results))
      .then(vehicles => this.setState({ vehicles: vehicles}))
      .catch(error => console.log(error))

    this.fetchFilm();

    if (localStorage.getItem('favorites')) {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({ favorites }, () => {console.log('in the localstorage conditional', this.state.favorites)});
    }
  }

  fetchFilm = () => {
    let filmNumber = Math.floor(Math.random() * (7 -1) + 1)
    fetch(`https://swapi.co/api/films/${filmNumber}`)
      .then(response => response.json())
      .then(film => ({title: film.title, crawl: film.opening_crawl, release: film.release_date}))
      .then(crawl => this.setState({ crawl: crawl, isLoading: false }))
      .catch(error => console.log(error))
  }

  fetchPeople = (people) => {
    const promises = people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({
          favorite: 'false',
          type: 'people',
          homeworld: data.name,
          population: data.population,
          name: person.name,
          species: person.species
         }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises);
  };

  fetchSpecies = (people) => {
    const promises = people.map(person => {
      return fetch(person.species)
        .then(response => response.json())
        .then(data => ({
          ...person,
          language: data.language,
          species: data.name
        }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises);
  };

  fetchResidents = (planets) => {
    const planetsArray = planets.map(planet => {
      let nameArray = [];
      planet.residents.map(resident => {
        return fetch(resident)
        .then(response => response.json())
        .then(data => nameArray.push(data.name))
        .catch(error => console.log(error))
      });
      return {
        favorite: 'false',
        type: 'planets',
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: nameArray
      }
    });
    console.log('planets', planetsArray[0].residents.length)
    return planetsArray
  };

  fetchVehicles = (vehicles) => {
    return vehicles.map(vehicle => {
      return {
        favorite: 'false',
        type: 'vehicles',
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        numberOfPassengers: vehicle.passengers
      }
    });
  };

  // favoriteCard = (name, type, favorite) => {
  //   const foundCard = this.state[type].find(card => card.name === name);
  //   foundCard.favorite = foundCard.favorite === 'false' ? 'true' : 'false';
  //   if (foundCard.favorite === 'true' && !this.state.favorites.includes(foundCard)) {
  //     this.setState({ favorites: [...this.state.favorites, foundCard] }, () => { console.log('localstorage experiment toggle on', this.state.favorites)});
  //     this.setLocalStorage([...this.state.favorites, foundCard]);
  //   } else {
  //     const filteredFavorites = this.state.favorites.filter(card => card.favorite === 'true');
  //     this.setLocalStorage(filteredFavorites);
  //     this.setState({ favorites: filteredFavorites }, () => { console.log('localstorage experiment toggle off', this.state.favorites)});
      
  //   }
  // }



  favoriteCard = (cardData) => {
    console.log('in favoriteCard', cardData)
    const favoriteNames = this.state.favorites.map(favorite => favorite.name)

    if (!favoriteNames.includes(cardData.name)) {
      this.setLocalStorage([...this.state.favorites, cardData]);
      this.setState({favorites : [...this.state.favorites, cardData]}, () => {console.log(this.state.favorites)});
    } else {
      const filteredFavorites = this.state.favorites.filter(favorite => favorite.name !== cardData.name);
      this.setLocalStorage(filteredFavorites);
      this.setState({ favorites: filteredFavorites }, () => { console.log(this.state.favorites) });
    }
  }



  setLocalStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  render() {
    return (
      <main className='App'>
        {this.state.isLoading && <p>Hold your horses</p>}
        <Header data={this.state.favorites}/>
        <Route exact path='/' render ={ () => <Crawler data={this.state.crawl} /> } />
        <Route exact path='/people' render={ () => <Cards data={this.state.people} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites} />} />
        <Route exact path='/planets' render={() => <Cards data={this.state.planets} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites}/>} />
        <Route exact path='/vehicles' render={() => <Cards data={this.state.vehicles} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites}/>} />
        <Route exact path='/favorites' render={() => <Cards data={this.state.favorites} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites}/>} />
      </main>
    )
  }
}

export default App;