import React from 'react';
import { shallow } from 'enzyme';
import { HaikusContainer, mapStateToProps } from './HaikusContainer';

describe('HaikusContainer', () => {
  let haikus;
  let history;
  let wrapper;

  beforeEach(() => {
    haikus = [{ title: 'Title', id: 111 }];
    history = { goBack: jest.fn() };
    wrapper = shallow(
      <HaikusContainer 
        haikus={haikus}
        history={history} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should go back in history', () =>{
    wrapper.instance().goBack();

    expect(history.goBack).toHaveBeenCalled();
  });

  it('should match snapshot if no haikus exist', () => {
    haikus = [];

    expect(wrapper).toMatchSnapshot();
  });

  describe('map state to props', () => {
    it('should map haikus to props', () => {
      const mockState = { 
        haikus: [{ title: 'title', id: 111 }] 
      }
      const result = mapStateToProps(mockState);
      const expected = { haikus: mockState.haikus };

      expect(result).toEqual(expected);
    });
  });
});