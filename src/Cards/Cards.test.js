import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards'

describe('Cards', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cards people={[]} planets={[]} vehicles={[]}/>)
  })
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});