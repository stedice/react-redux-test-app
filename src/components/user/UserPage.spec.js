import React from 'react';
import {shallow} from 'enzyme';
import UserPage from './UserPage';

describe('<UserPage />', () => {
  it('should have a header called \'Groups\'', () => {
    const wrapper = shallow(<UserPage />);
    const actual = wrapper.find('h1').text();
    const expected = 'User Detail Page';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<UserPage />);
    const actual = wrapper.find('h1').prop('className');
    const expected = 'alt-header';

    expect(actual).toEqual(expected);
  });
});
