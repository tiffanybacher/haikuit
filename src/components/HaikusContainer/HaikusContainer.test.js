import React from 'react';
import { shallow } from 'enzyme';
import HaikusContainer from './HaikusContainer';

describe('HaikusContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HaikusContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});