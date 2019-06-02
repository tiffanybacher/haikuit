import React from 'react';
import { shallow } from 'enzyme';
import SearchIcon from './SearchIcon';

describe('SearchIcon', () => {
  let toggleSearch;
  let tabindex;
  let wrapper;

  beforeEach(() => {
    toggleSearch = jest.fn();
    tabindex = jest.fn();
    wrapper = shallow(
      <SearchIcon 
        toggleSearch={toggleSearch}
        tabindex={tabindex} />
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