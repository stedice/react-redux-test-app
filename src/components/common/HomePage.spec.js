import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('should have a header called \'Home\'', () => {
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.find('h1').text();
    const expected = 'Home';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.find('h1').prop('className');
    const expected = 'alt-header';

    expect(actual).toEqual(expected);
  });

});
