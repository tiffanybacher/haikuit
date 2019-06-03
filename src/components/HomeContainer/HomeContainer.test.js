import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockHistory = [];
    wrapper = shallow(<HomeContainer history={mockHistory} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should direct to /haiku/:id', () => {
    wrapper.instance().redirect('/haiku/3');

    expect(mockHistory).toEqual(['/haiku/3']);
  });
});