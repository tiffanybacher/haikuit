import React from 'react';
import { shallow } from 'enzyme';
import { HaikuForm, mapDispatchToProps } from './HaikuForm';
import * as actions from '../../actions';
import { fetchWord } from '../../apiCalls/fetchWord';

describe('HaikuForm', () => {
  let mockHaiku;
  let addHaiku;
  let redirect;
  let wrapper;

  beforeEach(() => {
    mockHaiku = {
      title: 'Haiku',
      line1: 'This is a haiku',
      line2: 'I hope you like this haiku',
      line3: 'It\'s just a haiku'
    }
    addHaiku = jest.fn();
    redirect = jest.fn()
    wrapper = shallow(
      <HaikuForm 
        addHaiku={addHaiku} 
        redirect={redirect}
        fetchWord={fetchWord} />
    );
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

  it('should find the right line according to the param', () => {
    wrapper.setState({ ...mockHaiku });

    const result = wrapper.instance().findLine(1);
    const expected = 'This is a haiku';

    expect(result).toEqual(expected);
  });

  it('should invoke addHaikus and redirect on submit', () => {
    wrapper.setState(mockHaiku);

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('.HaikuForm-submit').simulate('click', mockEvent);

    expect(addHaiku).toHaveBeenCalled();

    expect(redirect).toHaveBeenCalled();
  });

  it('should disable button if not all fields have value', () => {
    wrapper.setState({ line3: '' });

    const result = wrapper.instance().checkAllFields();

    expect(result).toEqual(true);
  })

  it('should enable button if all fields have value', () => {
    wrapper.setState({ ...mockHaiku });

    const result = wrapper.instance().checkAllFields();

    expect(result).toEqual(false);
  });

  it('should map addHaiku to props', () => {
    const mockDispatch = jest.fn();
    const action = actions.addHaiku(mockHaiku);

    mapDispatchToProps(mockDispatch).addHaiku(mockHaiku);

    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
});