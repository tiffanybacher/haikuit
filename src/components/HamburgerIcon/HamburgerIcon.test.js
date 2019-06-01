import React from 'react';
import { shallow } from 'enzyme';
import HamburgerIcon from './HamburgerIcon';

describe('HamburgerIcon', () => {
  let toggleMenu;
  let wrapper;

  beforeEach(() => {
    toggleMenu = jest.fn();
    wrapper = shallow(
      <HamburgerIcon toggleMenu={toggleMenu} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should open menu drawer when clicked', () => {
    wrapper.find('.HamburgerIcon').simulate('click');

    expect(toggleMenu).toHaveBeenCalled();
  });
});