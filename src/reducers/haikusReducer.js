export const haikusReducer = (state = [], action) => {
  switch (action.type) {
    case ('ADD_HAIKU'):
      return [...state, action.haiku];

    case ('EDIT_HAIKU'):
      return state.map(haiku => {
        if (haiku.id === action.id) {
          return action.haiku;
        } else {
          return haiku;
        }
      });

    case ('DELETE_HAIKU'):
      return state.filter(haiku => haiku.id !== action.id);
      
    default:
      return state
  }
}