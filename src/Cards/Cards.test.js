import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards'

describe('Cards', () => {
  let wrapper, mockPeople, mockPlanets, mockVehicles, mockFavorites

  beforeEach(() => {
    wrapper = shallow(<Cards data={[]}/>)
    mockPeople = [
      { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20, favorite: 'false' },
      { name: 'Eric', homeworld: 'Tatooine', species: 'human', population: 42, favorite: 'false' }
    ];
    mockPlanets = [
      { name: 'Tatooine', terrain: 'grasslands, mountains', population: 200, climate: 'temperate', residents: ['Travis', 'Robbie'], favorite: 'false' },
      { name: 'Coruscant', terrain: 'desert', population: 42, climate: 'temperate', residents: ['Steve', 'Paul'], favorite: 'false' }
    ]
    mockVehicles = [
      { name: 'Toyota Corolla', model: 'sedan', class: 'wheeled', passengers: 4, favorite: 'false' }, 
      { name: 'Sand Crawler', model: 'Digger Crawler', class: 'wheeled', passengers: 30, favorite: 'false'}
    ]
    mockFavorites = [
      { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20, favorite: 'true' },
      { name: 'Eric', homeworld: 'Tatooine', species: 'human', population: 42, favorite: 'true' },
      { name: 'Toyota Corolla', model: 'sedan', class: 'wheeled', passengers: 4, favorite: 'true' }
    ];
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});