import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import Crawler from '../Crawler/Crawler';
import Cards from '../Cards/Cards';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('should update state to show favorited cards when favoriteCard is invoked', () => {
    const mockPerson = { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20, favorite: 'false' };

    const expected = [{ name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20, favorite: 'true' }];

    wrapper.setState({ people: [mockPerson] });
    wrapper.instance().favoriteCard('David', 'people', 'true');

    expect(wrapper.state('people')).toEqual(expected);
    expect(wrapper.state('favorites')).toEqual(expected);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('Route', () => {

    it('should route to the homepage with the Crawler displayed by default', () => {

      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(Crawler)).toHaveLength(1);
    });

    it('should route to the people page when the people link is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/people']}>
          <App />
        </MemoryRouter>
      );
     
      expect(wrapper.find(Cards)).toHaveLength(1);
    });

    it('should route to the planets page when the planets link is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/planets']}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(Cards)).toHaveLength(1);
    });

    it('should route to the vehicles page when the vehicles link is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/vehicles']}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(Cards)).toHaveLength(1);
    });

    it('should route to the favorites page when the favorites link is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/favorites']}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(Cards)).toHaveLength(1);
    });
  });
});
