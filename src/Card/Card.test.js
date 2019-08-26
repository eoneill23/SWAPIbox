import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  let wrapper, favoriteCardMock, mockData;

  beforeEach(() => {
    mockData = {
    name : 'Eric' ,
    homeworld : 'Earth', 
    species : 'Human', 
    population : '10',
    terrain : 'rocky',
    climate : 'temperate',
    residents : ['Eric', 'David', 'Chris'], 
    model : 'jalopy' ,
    vehicleClass : 'jalopy',
    numberOfPassengers : 4, 
    type : 'people'
    };
    favoriteCardMock = jest.fn();
    wrapper = shallow(<Card 
      data = {mockData}
      favoriteCard = {favoriteCardMock}
      favoritesArray = {[]}
      />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();


  });

  it('should call favoriteCard when the favorite input is clicked', () => {
    wrapper.find('input').simulate('click');
    expect(favoriteCardMock).toHaveBeenCalled();
    expect(favoriteCardMock).toHaveBeenCalledWith(mockData);
  })

  // it('should call favoriteCard when the favorite input is clicked', () => {
  //   const wrapper = mount(<Card
  //     data={mockData}
  //     favoriteCard={jest.fn()}
  //     favoritesArray={[]}
  //   />)
  //   wrapper.find('input').simulate('click');
  //   expect(wrapper.props().favoriteCard).toHaveBeenCalled();
  //   expect(wrapper.props().favoriteCard).toHaveBeenCalledWith(mockData);
  // });

});