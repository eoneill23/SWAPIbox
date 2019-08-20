// import React from 'react';


// const Fetcher = ({category}) => {
//   let endResult;
//   let functionEnding = category.charAt(0).toUpperCase() + category.slice(1);
//   fetch(`https://swapi.co/api/${category}`)
//     .then(response => response.json())
//     .then(data => this[`fetch${functionEnding}`](data.results))
//     .then(results => endResult = results)
//     .catch(error => console.log(error));

//   fetchPeople = (people) => {
//   const promises = people.map(person => {
//     return fetch(person.homeworld)
//       .then(response => response.json())
//       .then(data => ({
//         homeworld: data.name,
//         population: data.population,
//         name: person.name
//       }))
//       .catch(error => console.log(error));
//     });
//       return Promise.all(promises);
//   }

  // fetchPlanets = () => {
  //   const promises = people.map(person => {
  //     return fetch(person.homeworld)
  //       .then(response => response.json())
  //       .then(data => ({
  //         name:,
  //         model:,
  //         class:,
  //         numberOfPassengers:
  //       }))
  //       .catch(error => console.log(error));
  //   });
  //   return Promise.all(promises);
  // }

  // fetchVehicles = () => {
  //   return fetch()
  // }
//   return (
//     endResult
//   )

// };

// export default Fetcher;