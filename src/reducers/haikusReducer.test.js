import { haikusReducer } from './haikusReducer';
import * as actions from '../actions';

describe('haikusReducer', () => {
  let mockHaiku;

  beforeEach(() => {
    mockHaiku = {
      title: 'Haiku',
      line1: 'This is a haiku',
      line2: 'I hope you like this haiku',
      line3: 'It\'s just a haiku',
      id: 111
    };
  });

  it('should return default state', () => {
    const result = haikusReducer(undefined, {});
    const expected = [];
    
    expect(result).toEqual(expected);
  });

  describe('ADD_HAIKU', () => {
    it('should add new haiku to haikus state', () => {
      const result = haikusReducer([], actions.addHaiku(mockHaiku));
      const expected = [mockHaiku];

      expect(result).toEqual(expected);
    });
  });

  describe('EDIT_HAIKU', () => {
    it('should update existing haiku if there is an id match', () => {
      const newHaiku = {
        title: 'Haiku',
        line1: 'This is a haiku',
        line2: 'I hope you like this haiku',
        line3: 'It\'s a great haiku',
        id: 111
      };
      const result = haikusReducer([mockHaiku], actions.editHaiku(newHaiku));
      const expected = [newHaiku];

      expect(result).toEqual(expected);
    });

    it('should return the existing state if there is no id match', () => {
      const newHaiku = {
        title: 'Haiku',
        line1: 'This is a haiku',
        line2: 'I hope you like this haiku',
        line3: 'It\'s a great haiku',
        id: 112
      };
      const result = haikusReducer([mockHaiku], actions.editHaiku(newHaiku));
      const expected = [mockHaiku];

      expect(result).toEqual(expected);
    });
  });

  describe('DELETE_HAIKU', () => {
    it('should remove haiku from state with matching id', () => {
      const result = haikusReducer([mockHaiku], actions.deleteHaiku(mockHaiku.id));
      const expected = [];

      expect(result).toEqual(expected);
    });

    it('should not remove any haikus if there is no matching id', () => {
      const result = haikusReducer([mockHaiku], actions.deleteHaiku(112));
      const expected = [mockHaiku];

      expect(result).toEqual(expected);
    });
  });
});