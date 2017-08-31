import React from 'react';
import {shallow} from 'enzyme';
import GroupPage from './GroupPage';

describe('<GroupPage />', () => {
  it('should have a header called \'Groups\'', () => {
    const wrapper = shallow(<GroupPage />);
    const actual = wrapper.find('h1').text();
    const expected = 'Group Detail Page';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<GroupPage />);
    const actual = wrapper.find('h1').prop('className');
    const expected = 'alt-header';

    expect(actual).toEqual(expected);
  });
});
