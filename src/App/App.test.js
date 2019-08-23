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
  })
  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
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
    })

  });
});
