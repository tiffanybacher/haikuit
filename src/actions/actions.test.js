import * as actions from './index';

describe('actions', () => {
  let mockHaiku;

  beforeEach(() => {
    mockHaiku = {
      title: 'Haiku',
      line1: 'This is a haiku',
      line2: 'I hope you like this haiku',
      line3: 'It\'s just a haiku'
    };
  });

  it('should return a type of ADD_HAIKU with a haiku', () => {
    const result = actions.addHaiku(mockHaiku);
    const expected = { type: 'ADD_HAIKU', haiku: mockHaiku };

    expect(result).toEqual(expected);
  });

  it('should return a type of EDIT_HAIKU with a haiku', () => {
    const result = actions.editHaiku(mockHaiku);
    const expected = { type: 'EDIT_HAIKU', haiku: mockHaiku };

    expect(result).toEqual(expected);
  });

  it('should return a type of DELETE_HAIKU with an id', () => {
    const result = actions.deleteHaiku(mockHaiku.id);
    const expected = { type: 'DELETE_HAIKU', id: mockHaiku.id };

    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR with an error message', () => {
    const message = 'Something went wrong';
    const result = actions.setError(message);
    const expected = { type: 'SET_ERROR', message };

    expect(result).toEqual(expected);
  });
});