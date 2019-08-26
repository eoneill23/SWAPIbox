import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  let wrapper, favoriteCardMock;

  beforeEach(() => {
    favoriteCardMock = jest.fn();
    wrapper = shallow(<Card 
    name = 'Eric' 
    homeworld = 'Earth' 
    species = 'Human' 
    population = '10' 
    terrain = '' 
    climate = '' 
    residents = {[]} 
    model = '' 
    vehicleClass = '' numberOfPassengers = '' 
    isFavorite = 'false'
    favoriteCard = {favoriteCardMock}
    type = 'people'
    />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if the card is favorited', () => {
    wrapper.setProps({isFavorite: 'true'});
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when the favorite input is clicked', () => {
    
    wrapper.handleClick = jest.fn();
    wrapper.update();
    const mockEvent = {
      target : {
        cardname: 'Eric',
        cardtype: 'people',
        favorite: 'false',
        getAttribute: function(name) {
          return this[name];
        }
      }
    }

    wrapper.find('input').simulate('click', mockEvent);
    expect(wrapper.handleClick).toHaveBeenCalled();
  });

});