import React from 'react';
import { shallow } from 'enzyme';
import SearchIcon from './SearchIcon';

describe('SearchIcon', () => {
  let toggleSearch;
  let wrapper;

  beforeEach(() => {
    toggleSearch = jest.fn();
    wrapper = shallow(
      <SearchIcon toggleSearch={toggleSearch}/>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show search bar when clicked', () => {
    wrapper.find('.SearchIcon').simulate('click');

    expect(toggleSearch).toHaveBeenCalled();
  });
});