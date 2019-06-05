import React from 'react';
import { shallow } from 'enzyme';
import WordResult from './WordResult';

describe('WordResult', () => {
  let wordResult;
  let wrapper;

  beforeEach(() => {
    wordResult = { word: 'tenacity', syllables: {count: 4} };
    wrapper = shallow(<WordResult {...wordResult} />);
  });

  it('should match snapshot if there is a syllables prop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if there is no syllables prop', () => {
    wordResult = { word: 'cat' };
    wrapper = shallow(<WordResult {...wordResult} />);

    expect(wrapper).toMatchSnapshot();
  });
});