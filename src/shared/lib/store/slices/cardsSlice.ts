import { createSlice } from '@reduxjs/toolkit';

const cardsInitialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload.cards;
    },
  },
});

export const { setCards: setCards } = cardsSlice.actions;

export default cardsSlice.reducer;
