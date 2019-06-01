import React from 'react';
import { shallow } from 'enzyme';
import HamburgerIcon from './HamburgerIcon';

describe('HamburgerIcon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HamburgerIcon />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});