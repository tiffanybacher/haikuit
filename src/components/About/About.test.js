import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockHistory = { goBack: jest.fn() };
    wrapper = shallow(
      <About history={mockHistory} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should go back in history', () => {
    wrapper.instance().goBack();

    expect(mockHistory.goBack).toHaveBeenCalled();
  });
});