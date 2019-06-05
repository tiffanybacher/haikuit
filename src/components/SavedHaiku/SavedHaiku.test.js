import React from 'react';
import { shallow } from 'enzyme';
import { SavedHaiku, mapStoreToProps } from './SavedHaiku';

describe('SavedHaiku', () => {
  let wrapper;
  let mockMatch;
  let mockHaikus;

  beforeEach(() => {
    mockMatch = { params: {id: 111} };
    mockHaikus = [{ title: 'Title', id: 123 }];
    wrapper = shallow(
      <SavedHaiku 
        match={mockMatch}
        haikus={mockHaikus} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map haikus from store to props', () => {
    const mockState = { haikus: [{ title: 'Boop' }] };   
    const result = mapStoreToProps(mockState);
    const expected = { haikus: mockState.haikus };

    expect(result).toEqual(expected);
  });
});