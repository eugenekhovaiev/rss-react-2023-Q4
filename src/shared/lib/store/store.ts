import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import cardsReducer from './slices/cardsSlice';

const store = configureStore({
  reducer: { search: searchReducer, cards: cardsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
