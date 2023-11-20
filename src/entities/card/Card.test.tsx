import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { describe, expect, test, vi } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Product } from '../../shared/types';
import Card from './Card';
import App from '../../app/App';

const mockCard: Product = {
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
};

const { hoistedMockCards } = vi.hoisted(() => {
  return {
    hoistedMockCards: [
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
    ],
  };
});

const { mockGetProductsResp } = vi.hoisted(() => {
  return {
    mockGetProductsResp: vi.fn().mockResolvedValue({ total: 10, limit: 5, skip: 0, products: hoistedMockCards }),
  };
});

vi.mock('../../shared/api/getProductsResp', () => {
  return { default: mockGetProductsResp };
});

describe('Card component', () => {
  test('renders the relevant card data', async () => {
    render(
      <MemoryRouter>
        <Card card={mockCard} />
      </MemoryRouter>,
    );
    const title = screen.getByText(mockCard.title);
    expect(title).toBeInTheDocument();

    const brand = screen.getByText(mockCard.brand);
    expect(brand).toBeInTheDocument();

    const price = screen.getByText(mockCard.price.toString());
    expect(price).toBeInTheDocument();

    const rating = screen.getByText(mockCard.rating.toString());
    expect(rating).toBeInTheDocument();

    const imgSrc = screen.getByRole('img').getAttribute('src');
    expect(imgSrc).toBe(mockCard.thumbnail);
  });

  test('opens a detailed card component after clicking on it', async () => {
    render(<App />);
    screen.debug();

    const cards = await screen.findAllByTestId('card');
    expect(mockGetProductsResp).toBeCalled();
    screen.debug();
    await waitFor(async () => {
      userEvent.click(cards[0]);
      const details = await screen.findByTestId('details');
      expect(details).toBeInTheDocument();
    });
  });
});
