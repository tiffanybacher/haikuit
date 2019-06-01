import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let toggleMenu;
  let wrapper;

  beforeEach(() => {
    toggleMenu = jest.fn();
    wrapper = shallow(<Menu toggleMenu={toggleMenu} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should close menu when x button is clicked', () => {
    wrapper.find('.Menu-close-btn').simulate('click');

    expect(toggleMenu).toHaveBeenCalled();
  });
});