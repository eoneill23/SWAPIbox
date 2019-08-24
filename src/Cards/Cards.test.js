import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards'

describe('Cards', () => {
  let wrapper, mockPerson

  beforeEach(() => {
    wrapper = shallow(<Cards data={[]}/>)
    mockPerson = { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20, favorite: 'false' };
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});