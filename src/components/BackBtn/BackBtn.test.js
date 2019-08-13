import React from 'react';
import { shallow } from 'enzyme';
import BackBtn from './BackBtn';

describe('BackBtn', () => {
  let goBack;
  let wrapper;

  beforeEach(() => {
    goBack = jest.fn();
    wrapper = shallow(<BackBtn goBack={goBack} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke goBack on click', () => {
    wrapper.find('.back-btn').simulate('click');

    expect(goBack).toHaveBeenCalled();
  });
});