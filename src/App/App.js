import React, { Component }from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import Crawler from '../Crawler/Crawler';
import { fetchPeople, fetchPlanets, fetchVehicles, fetchFilm } from '../util/apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      people: [],
      planets: [],
      crawl: {},
      favorites: [],
      crawlIsLoading: true,
      peopleIsLoading: true,
      planetsIsLoading: true,
      vehiclesIsLoading: true
    }
  }

  componentDidMount() {
    fetchPeople()
      .then(people => this.setState({ people: people, peopleIsLoading: false}))
      .catch(error => {
        throw Error(error.message)
      });

    fetchPlanets()
      .then(planets => this.setState({ planets: planets, planetsIsLoading: false}))
      .catch(error => console.log(error));

    fetchVehicles()
      .then(vehicles => this.setState({ vehicles: vehicles, vehiclesIsLoading: false}))
      .catch(error => console.log(error))

    fetchFilm()
      .then(crawl => this.setState({ crawl: crawl, crawlIsLoading: false }))
      .catch(error => console.log(error))

    if (localStorage.getItem('favorites')) {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({ favorites });
    }
  }

  favoriteCard = (cardData) => {
    const favoriteNames = this.state.favorites.map(favorite => favorite.name)
    if (!favoriteNames.includes(cardData.name)) {
      this.addToLocalStorage(cardData);
    } else {
      this.removeFromLocalStorage(cardData);
    }
  }

  setLocalStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  addToLocalStorage = (cardData) => {
    this.setLocalStorage([...this.state.favorites, cardData]);
    this.setState({ favorites: [...this.state.favorites, cardData] });
  }

  removeFromLocalStorage = (cardData) => {
    const filteredFavorites = this.state.favorites.filter(favorite => favorite.name !== cardData.name);
    this.setLocalStorage(filteredFavorites);
    this.setState({ favorites: filteredFavorites });
  }

  render() {
    return (
      <main className='App'>
        <Header data={this.state.favorites}/>
        <Route exact path='/' render={() => <Crawler data={this.state.crawl} />} />
        <Route exact path='/people' render={() => <Cards data={this.state.people} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites} />} 
        />
        <Route exact path='/planets' render={() => <Cards data={this.state.planets} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites}/>} 
        />
        <Route exact path='/vehicles' render={() => <Cards data={this.state.vehicles} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites}/>} 
        />
        <Route exact path='/favorites' render={() => <Cards data={this.state.favorites} favoriteCard={this.favoriteCard} favoritesArray={this.state.favorites} type={'favorites'}/>} />
      </main>
    )
  }
}

export default App;