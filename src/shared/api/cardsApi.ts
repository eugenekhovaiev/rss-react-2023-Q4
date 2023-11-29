import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import INITIAL_CARDS_PER_PAGE from '../consts/INITIAL_CARDS_ON_PAGE_COUNT';
import API_DATA from '../consts/API_DATA';
import { CardQueryOptions, CardsQueryOptions, Product, Response } from '../types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getCards: build.query<Response, CardsQueryOptions>({
      query: (options) =>
        `${options.baseUrl || API_DATA.baseUrl}${options.path || API_DATA.path}/search?q=${
          options.searchTerm || ''
        }&limit=${options.limit || INITIAL_CARDS_PER_PAGE}&skip=${options.offset || 0}`,
    }),
    getCard: build.query<Product | undefined, CardQueryOptions>({
      query: (options) => `${options.baseUrl || API_DATA.baseUrl}${options.path || API_DATA.path}/${options.id}`,
    }),
  }),
});

export const { useLazyGetCardsQuery, useLazyGetCardQuery, useGetCardQuery } = cardsApi;
