import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let toggleMenu;
  let menuShown;
  let wrapper;

  beforeEach(() => {
    toggleMenu = jest.fn();
    menuShown = jest.fn();
    wrapper = shallow(
      <Header 
        toggleMenu={this.toggleMenu} 
        menuShown={this.state.menuShown} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle search bar', () => {
    expect(wrapper.state('searchShown')).toBe(false);

    wrapper.instance().toggleSearch();

    expect(wrapper.state('searchShown')).toBe(true);
  });

  it('should render search bar if searchShown is true', () => {
    wrapper.setState({ searchShown: true });

    expect(wrapper).toMatchSnapshot();
  });
});