import React from 'react';
import { shallow } from 'enzyme';
import Haiku from './Haiku';

describe('Haiku', () => {
  let mockHaiku;
  let wrapper;

  beforeEach(() => {
    mockHaiku = { title: 'title', id: 123 }
    wrapper = shallow(<Haiku />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if haiku is passed in', () => {
    wrapper = shallow(<Haiku { ...mockHaiku } />);

    expect(wrapper).toMatchSnapshot();
  });
});