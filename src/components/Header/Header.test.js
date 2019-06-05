import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps } from './Header';
import { fetchWord } from '../../apiCalls/fetchWord';

jest.mock('../../apiCalls/fetchWord');

describe('Header', () => {
  let toggleMenu;
  let menuShown;
  let wrapper;

  beforeEach(() => {
    toggleMenu = jest.fn();
    menuShown = jest.fn();
    wrapper = shallow(
      <Header 
        toggleMenu={toggleMenu} 
        menuShown={menuShown}
        fetchWord={fetchWord} />
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

  it('should match snapshot if searchShown is true', () => {
    wrapper.setState({ searchShown: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should open menu drawer when hamburger btn is clicked', () => {
    wrapper.find('.hamburger-icon').simulate('click');

    expect(toggleMenu).toHaveBeenCalled();
  });

  it('should show search bar when search btn is clicked', () => {
    expect(wrapper.state('searchShown')).toEqual(false);

    wrapper.find('.search-icon').simulate('click');

    expect(wrapper.state('searchShown')).toEqual(true);
  });

  it('should update searchQuery on change in search input', () => {
    const mockEvent = { 
      preventDefault: jest.fn(), 
      target: { value: 'particular' } 
    }

    wrapper.setState({ searchShown: true });

    expect(wrapper.state('searchQuery')).toEqual('');

    wrapper.find('.search-input').simulate('change', mockEvent);

    expect(wrapper.state('searchQuery')).toEqual('particular');
  });

  it('should clear the search input', () => {
    wrapper.setState({ searchShown: true });

    wrapper.find('.clear-btn').simulate('click');

    expect(wrapper.state('searchQuery')).toEqual('');
  });

  it('should match snapshot if result is shown', () => {
    wrapper.setState({
      searchShown: true,
      resultShown: true,
      currentResult: { word: 'tenacity' }
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should map fetchWord from dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mockWord = 'tenacity';
    const thunk = fetchWord(mockWord);
    const props = mapDispatchToProps(mockDispatch);

    props.fetchWord(mockWord);

    expect(mockDispatch).toHaveBeenCalledWith(thunk);
  });
});