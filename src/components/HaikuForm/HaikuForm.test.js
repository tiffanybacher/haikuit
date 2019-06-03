import React from 'react';
import { shallow } from 'enzyme';
import { HaikuForm, mapDispatchToProps } from './HaikuForm';
import * as actions from '../../actions';

describe('HaikuForm', () => {
  let mockHaiku;
  let addHaiku;
  let wrapper;

  beforeEach(() => {
    mockHaiku = {
      title: 'Haiku',
      line1: 'This is a haiku',
      line2: 'I hope you like this haiku',
      line3: 'It\'s just a haiku'
    }
    addHaiku = jest.fn();
    wrapper = shallow(<HaikuForm addHaiku={addHaiku} />);
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

  it('should invoke addHaikus on submit', () => {
    wrapper.setState(mockHaiku);

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('.HaikuForm').simulate('submit', mockEvent);

    expect(addHaiku).toHaveBeenCalled();
  });

  it('should map addHaiku to props', () => {
    const mockDispatch = jest.fn();
    const action = actions.addHaiku(mockHaiku);

    mapDispatchToProps(mockDispatch).addHaiku(mockHaiku);

    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
});