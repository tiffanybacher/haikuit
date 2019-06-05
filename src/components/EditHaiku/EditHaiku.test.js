import React from 'react';
import { shallow } from 'enzyme';
import { EditHaiku, mapStateToProps } from './EditHaiku';

describe('EditHaiku', () => {
  let mockMatch;
  let mockHaikus;
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockMatch = { params: { id: 1} };
    mockHaikus = [{ title: 'Title', id: 1 }];
    mockHistory = [];
    wrapper = shallow(
      <EditHaiku 
        match={mockMatch}
        haikus={mockHaikus}
        history={mockHistory} />
    );
  });

  it('should direct to /haiku/:id', () => {
    wrapper.instance().redirect('/haiku/3');

    expect(mockHistory).toEqual(['/haiku/3']);
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