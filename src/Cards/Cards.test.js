import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards'

describe('Cards', () => {
  let peopleWrapper, planetsWrapper, vehiclesWrapper, favoritesWrapper, mockPeople, mockPlanets, mockVehicles, mockFavorites, favoriteCard;

  beforeEach(() => {
    mockPeople = [
      { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20},
      { name: 'Eric', homeworld: 'Tatooine', species: 'human', population: 42}
    ];
    mockPlanets = [
      { name: 'Tatooine', terrain: 'grasslands, mountains', population: 200, climate: 'temperate', residents: ['Travis', 'Robbie']},
      { name: 'Coruscant', terrain: 'desert', population: 42, climate: 'temperate', residents: ['Steve', 'Paul']}
    ]
    mockVehicles = [
      { name: 'Toyota Corolla', model: 'sedan', class: 'wheeled', passengers: 4},
      { name: 'Sand Crawler', model: 'Digger Crawler', class: 'wheeled', passengers: 30}
    ]
    mockFavorites = [
      { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20},
      { name: 'Eric', homeworld: 'Tatooine', species: 'human', population: 42},
      { name: 'Toyota Corolla', model: 'sedan', class: 'wheeled', passengers: 4}
    ];
    global.Date.now = jest.spyOn(global.Date, 'now').mockImplementation(() => 12345);
    peopleWrapper = shallow(<Cards data={mockPeople} favoriteCard={favoriteCard}/>);
    planetsWrapper = shallow(<Cards data={mockPlanets} favoriteCard={favoriteCard}/>);
    vehiclesWrapper = shallow(<Cards data={mockVehicles} favoriteCard={favoriteCard}/>);
    favoritesWrapper = shallow(<Cards data={mockFavorites} favoriteCard={favoriteCard}/>);
  });

  it('should render without crashing', () => {
    expect(peopleWrapper.length).toEqual(1)
  });

  // it('should generate a key for each Card component that is a name with Date.now()', () => {
  //   global.Date.now = jest.spyOn(global.Date, 'now').mockImplementation(() => 12345);

  //   expect(peopleWrapper.find(Card).at(0).props().id).toBe('David12345')
  // });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(peopleWrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(planetsWrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(vehiclesWrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(favoritesWrapper).toMatchSnapshot();
  });
});