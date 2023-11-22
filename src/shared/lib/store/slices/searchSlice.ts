import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = {
  searchTerm: localStorage.getItem('searchTerm') || '',
};

const searchSlice = createSlice({
  name: 'cards',
  initialState: searchInitialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
