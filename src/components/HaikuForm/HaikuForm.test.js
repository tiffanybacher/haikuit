import React from 'react';
import { shallow } from 'enzyme';
import { HaikuForm, mapDispatchToProps } from './HaikuForm';
import * as actions from '../../actions';
import { fetchWord } from '../../apiCalls/fetchWord';

jest.mock('../../apiCalls/fetchWord');

describe('HaikuForm', () => {
  let mockHaiku;
  let editHaiku;
  let addHaiku;
  let deleteHaiku;
  let redirect;
  let path;
  let wrapper;

  beforeEach(() => {
    mockHaiku = {
      title: 'Haiku',
      line1: 'This is a haiku',
      line2: 'I hope you like this haiku',
      line3: 'It\'s just a haiku'
    };
    editHaiku = jest.fn();
    addHaiku = jest.fn();
    deleteHaiku = jest.fn();
    redirect = jest.fn();
    path = '/haiku/:id/edit';
    wrapper = shallow(
      <HaikuForm 
        addHaiku={addHaiku} 
        editHaiku={editHaiku}
        deleteHaiku={deleteHaiku}
        redirect={redirect}
        fetchWord={fetchWord}
        path={path} 
        id={111}/>
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

  it('should invoke editHaikus and redirect on submit', () => {
    wrapper.setState(mockHaiku);

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('.HaikuForm-submit').simulate('click', mockEvent);

    expect(editHaiku).toHaveBeenCalled();

    expect(redirect).toHaveBeenCalled();
    
  });

  it('should invoke addHaikus and redirect on submit', () => {
    wrapper.setState(mockHaiku);

    const mockEvent = { preventDefault: jest.fn() }

    wrapper = shallow(
      <HaikuForm 
        path={'/'} 
        addHaiku={addHaiku}
        redirect={redirect} />
    );

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

  it('should return a spelling error message', () => {
    wrapper.setState({ line1Syllables: -1 });

    const result = wrapper.instance().renderMsg(1);
    const expected = 'Spelling Error';

    expect(result).toEqual(expected);
  });

  it('should return a message with the count of syllables', () => {
    wrapper.setState({ line2Syllables: 3 });

    const result = wrapper.instance().renderMsg(2);
    const expected = '3 syllables';

    expect(result).toEqual(expected);
  });

  it('should render a delete button only on the edit component', () => {
    wrapper = shallow(<HaikuForm path={path} />);

    const result = wrapper.instance().renderDeleteBtn();
    const handleDelete = wrapper.instance().handleDelete;
    const expected = 
      <button 
        className="delete-btn"
        onClick={handleDelete}>
        Delete This Haiku
      </button>

    expect(result).toEqual(expected);
  });

  it('should not render a delete button when not on the edit component', () => {
    wrapper = shallow(<HaikuForm path={'/'} />);

    const result = wrapper.instance().renderDeleteBtn();
   
    expect(result).toEqual(undefined);
  });

  it('should delete a haiku and clear state on click', () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('.delete-btn').simulate('click', mockEvent);

    expect(deleteHaiku).toHaveBeenCalledWith(111);

    expect(wrapper.state()).toEqual({
      title: '*** THIS HAIKU WAS DELETED ***',
      line1: '',
      line2: '',
      line3: '',
      line1Syllables: 0,
      line2Syllables: 0,
      line3Syllables: 0
    });
  });

  describe('map dispatch to props', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should map addHaiku to props', () => {
      const action = actions.addHaiku(mockHaiku);

      mapDispatchToProps(mockDispatch).addHaiku(mockHaiku);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });

    it('should map editHaiku to props', () => {
      const action = actions.editHaiku(mockHaiku);

      mapDispatchToProps(mockDispatch).editHaiku(mockHaiku);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });

    it('should map deleteHaiku to props', () => {
      const id = mockHaiku.id;
      const action = actions.deleteHaiku(id);

      mapDispatchToProps(mockDispatch).deleteHaiku(id);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });

    it('should map fetchWord to props', () => {
      const thunk = fetchWord('tenacity');

      mapDispatchToProps(mockDispatch).fetchWord('tenacity');

      expect(mockDispatch).toHaveBeenCalledWith(thunk);
    });
  });
});