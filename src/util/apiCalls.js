const peopleFetchHelper = (people) => {
  const promises = people.map(person => {
    return fetch(person.homeworld)
      .then(response => {
        if(!response.ok) {
          throw Error ('There was an error fetching the people.')
        }
        return response.json()
      })
      .then(data => ({
        type: 'people',
        homeworld: data.name,
        population: data.population,
        name: person.name,
        species: person.species
      }))
      .catch(error => {
        throw Error(error.message)
      });
  });
  return Promise.all(promises);
}

const speciesFetchHelper = (people) => {
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
}

const residentsFetchHelper = (planets) => {
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
  return planetsArray
}

const vehicleFetchHelper = (vehicles) => {
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

export const fetchPeople = () => {
  return fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => peopleFetchHelper(data.results))
    .then(data => speciesFetchHelper(data))
    .catch(error => {
      throw Error(error.message)
    })
}

export const fetchPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => residentsFetchHelper(data.results))
}

export const fetchVehicles = (vehicles) => {
  return fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(data => vehicleFetchHelper(data.results))
}

export const fetchFilm = () => {
  let filmNumber = Math.floor(Math.random() * (7 - 1) + 1)
  return fetch(`https://swapi.co/api/films/${filmNumber}`)
    .then(response => response.json())
    .then(film => ({ title: film.title, crawl: film.opening_crawl, release: film.release_date }))
}