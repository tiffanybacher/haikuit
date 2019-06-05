import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer, mapStateToProps } from './HomeContainer';

describe('HomeContainer', () => {
  let mockHistory;
  let haikus;
  let wrapper;

  beforeEach(() => {
    mockHistory = [];
    haikus = [{ title: 'Title', id: 111 }]
    wrapper = shallow(
      <HomeContainer 
        history={mockHistory}
        haikus={haikus} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should direct to /haiku/:id', () => {
    wrapper.instance().redirect('/haiku/3');

    expect(mockHistory).toEqual(['/haiku/3']);
  });

  it('should match snapshot if no latest haiku exists', () => {
    haikus = [];

    expect(wrapper).toMatchSnapshot();
  });

  describe('map state to props', () => {
    let state;

    beforeEach(() => {
      state = { haikus };
    });

    it('should map haikus to props', () => {
      const result = mapStateToProps(state);
      const expected = { haikus: state.haikus };

      expect(result).toEqual(expected);
    });
  });
});