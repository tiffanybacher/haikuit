import React from 'react';
import { shallow } from 'enzyme';
import HaikuForm from './HaikuForm';

describe('HaikuForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HaikuForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on change in any input', () => {
    const mockEvent = { 
      target: { name: 'title', value: 'Haiku' }
    };

    expect(wrapper.state('title')).toEqual('');

    wrapper.find('#title-input').simulate('change', mockEvent);

    expect(wrapper.state('title')).toEqual('Haiku');
  });
});