const APIcalls = {

  fetchPeople : () => {
    fetchPeople('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => this.fetchPeople(data.results))
      .then(data => this.fetchSpecies(data))
      .then(people => this.setState({ people: people }))
      .catch(error => console.log(error));
  },

  fetchPlanets : () => {
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => this.fetchResidents(data.results))
      .then(planets => this.setState({ planets: planets }))
      .catch(error => console.log(error));
  },

  fetchVehicles : () => {
    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => this.fetchVehicles(data.results))
      .then(vehicles => this.setState({ vehicles: vehicles }))
      .catch(error => console.log(error))
  },

  fetchFilm : () => {
    let filmNumber = Math.floor(Math.random() * (7 - 1) + 1)
    fetch(`https://swapi.co/api/films/${filmNumber}`)
      .then(response => response.json())
      .then(film => ({ title: film.title, crawl: film.opening_crawl, release: film.release_date }))
      .then(crawl => this.setState({ crawl: crawl, isLoading: false }))
      .catch(error => console.log(error))
  },

  fetchPeople : (people) => {
    const promises = people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({
          type: 'people',
          homeworld: data.name,
          population: data.population,
          name: person.name,
          species: person.species
        }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises);
  },

  fetchSpecies : (people) => {
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
  },

  fetchResidents : (planets) => {
    const planetsArray = planets.map(planet => {
      let nameArray = [];
      planet.residents.map(resident => {
        return fetch(resident)
          .then(response => response.json())
          .then(data => nameArray.push(data.name))
          .catch(error => console.log(error))
      });
      return {
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
  },

  fetchVehicles : (vehicles) => {
    return vehicles.map(vehicle => {
      return {
        type: 'vehicles',
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        numberOfPassengers: vehicle.passengers
      }
    });
}

}

export default APIcalls; 