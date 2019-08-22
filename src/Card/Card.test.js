import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card name='' homeworld='' species='' population='' terrain='' climate='' residents={[]} model = '' vehicleClass = '' numberOfPassengers = '' />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});