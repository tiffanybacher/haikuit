import React from 'react';
import { shallow } from 'enzyme';
import { HaikusContainer, mapStateToProps } from './HaikusContainer';

describe('HaikusContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HaikusContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('map state to props', () => {
    it('should map haikus to props', () => {
      const mockState = { 
        haikus: [{ title: 'title' }] 
      }
      const result = mapStateToProps(mockState);
      const expected = { haikus: mockState.haikus };

      expect(result).toEqual(expected);
    });
  });
});