import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});