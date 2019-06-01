import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
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