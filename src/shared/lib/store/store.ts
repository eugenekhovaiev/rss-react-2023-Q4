import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import cardsReducer from './slices/cardsSlice';
import { cardsApi } from '../../api/cardsApi';

const store = configureStore({
  reducer: { search: searchReducer, cards: cardsReducer, [cardsApi.reducerPath]: cardsApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
