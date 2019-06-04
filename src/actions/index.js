export const addHaiku = (haiku) => ({
  type: 'ADD_HAIKU',
  haiku
});

export const editHaiku = (haiku) => ({
  type: 'EDIT_HAIKU',
  haiku,
  id: haiku.id
});

export const deleteHaiku = (id) => ({
  type: 'DELETE_HAIKU',
  id
});

export const setError = (message) => ({
  type: 'SET_ERROR',
  message
});

export const setLoading = (bool) => ({
  type: 'SET_LOADING',
  isLoading: bool
});