import React from 'react';
import { shallow } from 'enzyme';
import Page404 from './Page404';

describe('Page404', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Page404 />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});