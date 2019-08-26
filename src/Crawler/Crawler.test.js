import React from 'react';
import { shallow } from 'enzyme';
import Crawler from './Crawler';

describe('Crawler', () => {
  let wrapper, mockData;

  beforeEach(() => {
    mockData = {
      crawl: 'Blah blah blah',
      title: 'Can you understand this?',
      release: '1997'
    }
    wrapper = shallow(<Crawler data={mockData} />);
  });

  it('should render without crashing', () => {
      expect(wrapper.length).toEqual(1)
  });
});