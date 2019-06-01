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
});