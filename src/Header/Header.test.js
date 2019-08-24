import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  let wrapper, mockPerson;
  
  beforeEach(() => {
    wrapper = shallow(<Header data={[mockPerson]} />);
    mockPerson = { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20, favorite: 'true' };
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should link to the home route when the home navLink is clicked', () => {
    expect(wrapper.find(NavLink).at(0).props().to).toBe('/');
  });

  it('should link to the people route when the people navLink is clicked', () => {
    expect(wrapper.find(NavLink).at(1).props().to).toBe('/people');
  });

  it('should link to the planets route when the planets navLink is clicked', () => {
    expect(wrapper.find(NavLink).at(2).props().to).toBe('/planets');
  });

  it('should link to the vehicles route when the vehicles navLink is clicked', () => {
    expect(wrapper.find(NavLink).at(3).props().to).toBe('/vehicles');
  });

  it('should link to the favorites route when the favorites navLink is clicked', () => {
    expect(wrapper.find(NavLink).at(4).props().to).toBe('/favorites');
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
});

