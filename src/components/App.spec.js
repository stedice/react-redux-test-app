import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

  it('should link to Home route path', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should link to Users route path', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/users').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should link to Groups route path', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/groups').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should link to About route path', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/about').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
