import '@testing-library/jest-dom';
import { describe, vi, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ResultsSection from './ResultsSection';
import { Product, ResultsProps } from '../../shared/types';
import { AppContext, AppContextProvider } from '../../shared/lib/AppContext';

const mockProps: ResultsProps = {
  loaded: true,
  currPage: 1,
  cardsPerPage: 6,
  totalItemsCount: 100,
  onPageChange: vi.fn(),
  onCardsAmountChange: vi.fn(),
};

const mockCards: Product[] = [
  {
    id: 1,
    title: 'TestTitle',
    brand: 'TestBrand',
    category: 'TestCategory',
    description: 'TestDescription',
    images: [],
    thumbnail: 'testThumbnailUrl',
    price: 10,
    discountPercentage: 11,
    rating: 1.5,
    stock: 111,
  },
  {
    id: 2,
    title: 'TestTitle2',
    brand: 'TestBrand2',
    category: 'TestCategory2',
    description: 'TestDescription2',
    images: [],
    thumbnail: 'testThumbnailUrl2',
    price: 22,
    discountPercentage: 21,
    rating: 2.5,
    stock: 222,
  },
  {
    id: 3,
    title: 'TestTitle3',
    brand: 'TestBrand3',
    category: 'TestCategory3',
    description: 'TestDescription3',
    images: [],
    thumbnail: 'testThumbnailUrl3',
    price: 31,
    discountPercentage: 31,
    rating: 3.5,
    stock: 333,
  },
  {
    id: 4,
    title: 'TestTitle4',
    brand: 'TestBrand4',
    category: 'TestCategory4',
    description: 'TestDescription4',
    images: [],
    thumbnail: 'testThumbnailUrl4',
    price: 41,
    discountPercentage: 41,
    rating: 4.5,
    stock: 444,
  },
  {
    id: 5,
    title: 'TestTitle5',
    brand: 'TestBrand5',
    category: 'TestCategory5',
    description: 'TestDescription5',
    images: [],
    thumbnail: 'testThumbnailUrl5',
    price: 51,
    discountPercentage: 51,
    rating: 5.5,
    stock: 555,
  },
  {
    id: 6,
    title: 'TestTitle6',
    brand: 'TestBrand6',
    category: 'TestCategory6',
    description: 'TestDescription6',
    images: [],
    thumbnail: 'testThumbnailUrl6',
    price: 61,
    discountPercentage: 61,
    rating: 6.5,
    stock: 666,
  },
];

const mockContext = {
  searchTerm: 'testSearchTerm',
  setSearchTerm: vi.fn(),
  cards: mockCards,
  setCards: vi.fn(),
};

describe('Results section', () => {
  test('renders the specified number of cards', () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={mockContext}>
          <ResultsSection {...mockProps} />
        </AppContext.Provider>
      </MemoryRouter>,
    );

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(6);
  });

  test('displays an appropriate message if no cards are present', () => {
    render(
      <MemoryRouter>
        <AppContextProvider>
          <ResultsSection {...mockProps} />
        </AppContextProvider>
      </MemoryRouter>,
    );

    const message = screen.getByText(/Nothing found/i);
    expect(message).toBeInTheDocument();
  });
});
