import React from 'react';
import { shallow } from 'enzyme';
import Haiku from './Haiku';

describe('Haiku', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Haiku />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});