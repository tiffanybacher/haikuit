import React from 'react';
import { shallow } from 'enzyme';
import { EditHaiku, mapStateToProps } from './EditHaiku';

describe('EditHaiku', () => {
  let mockMatch;
  let mockHaikus;
  let wrapper;

  beforeEach(() => {
    mockMatch = { params: { id: 1} };
    mockHaikus = [{ title: 'Title', id: 1 }];
    wrapper = shallow(
      <EditHaiku 
        match={mockMatch}
        haikus={mockHaikus} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('map state to props', () => {
    it('should map haikus to props', () => {
      const mockState = {
        haikus: [{title: 'title'}]
      };
      const result = mapStateToProps(mockState);
      const expected = { haikus: mockState.haikus };

      expect(result).toEqual(expected);
    });
  });
});