import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { describe, expect, test, vi } from 'vitest';

import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';

import { AppContextProvider } from '../shared/lib/AppContext';
import ResultsSection from '../widgets/resultsSection/ResultsSection';
import getRoutes from './getRoutes';

const { mockCards: mockCards } = vi.hoisted(() => {
  return {
    mockCards: [
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
    mockGetProductsResp: vi.fn().mockResolvedValue({ total: 10, limit: 5, skip: 0, products: mockCards }),
  };
});

vi.mock('../shared/api/getProductsResp', () => {
  return { default: mockGetProductsResp };
});

const { mockGetProductResp } = vi.hoisted(() => {
  return {
    mockGetProductResp: vi.fn().mockResolvedValue(mockCards[0]),
  };
});

vi.mock('../shared/api/getProductResp', () => {
  return { default: mockGetProductResp };
});

describe('Card list component', () => {
  test('renders the specified number of cards', async () => {
    render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBe(6);
  });

  test('displays an appropriate message if no cards are present', () => {
    render(
      <MemoryRouter>
        <AppContextProvider>
          <ResultsSection
            {...{
              loaded: true,
              currPage: 1,
              cardsPerPage: 6,
              totalItemsCount: 100,
              onPageChange: vi.fn(),
              onCardsAmountChange: vi.fn(),
            }}
          />
        </AppContextProvider>
      </MemoryRouter>,
    );

    const message = screen.getByText(/Nothing found/i);
    expect(message).toBeInTheDocument();
  });
});

describe('Card component', () => {
  test('renders the relevant card data', async () => {
    render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

    const cards = await screen.findAllByTestId('card');

    const title = within(cards[0]).getByText(mockCards[0].title);
    expect(title).toBeInTheDocument();

    const brand = within(cards[0]).getByText(mockCards[0].brand);
    expect(brand).toBeInTheDocument();

    const price = within(cards[0]).getByText(mockCards[0].price.toString());
    expect(price).toBeInTheDocument();

    const rating = within(cards[0]).getByText(mockCards[0].rating.toString());
    expect(rating).toBeInTheDocument();

    const imgSrc = within(cards[0]).getByRole('img').getAttribute('src');
    expect(imgSrc).toBe(mockCards[0].thumbnail);
  });

  test('opens a detailed card component after clicking on it', async () => {
    render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

    const cards = await screen.findAllByTestId('card');
    userEvent.click(cards[0]);
    const detailsSection = await screen.findByTestId('details');
    expect(detailsSection).toBeInTheDocument();
  });

  test('triggers an additional API call to fetch detailed information after clicking on it', async () => {
    render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

    const cards = await screen.findAllByTestId('card');
    userEvent.click(cards[0]);
    expect(mockGetProductResp).toBeCalled();
  });
});

describe('Detailed card component', () => {
  // test('displays loading indicator fetching data', async () => {
  //   render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

  //   // screen.debug();
  //   const cards = await screen.findAllByTestId('card');
  //   await userEvent.click(cards[0]);
  //   const detailsSection = await screen.findByTestId('details');
  //   screen.debug();
  //   // console.log(detailsSection.innerHTML);
  //   expect(detailsSection).toBeInTheDocument();
  //   const loadingIndicator = await screen.findByText(/Loading/i);
  //   // const loadingIndicator = within(detailsSection).findByText(/Loading/i);
  //   console.log(loadingIndicator.outerHTML);
  //   expect(loadingIndicator).toBeInTheDocument();
  //   // screen.debug();
  // });

  test('correctly displays the detailed card data', async () => {
    render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

    const cards = await screen.findAllByTestId('card');
    await userEvent.click(cards[0]);
    const detailsSection = await screen.findByTestId('details');

    const title = within(detailsSection).getByText(mockCards[0].title);
    expect(title).toBeInTheDocument();

    const brand = within(detailsSection).getByText(mockCards[0].brand);
    expect(brand).toBeInTheDocument();

    const price = within(detailsSection).getByText(mockCards[0].price.toString());
    expect(price).toBeInTheDocument();

    const rating = within(detailsSection).getByText(mockCards[0].rating.toString());
    expect(rating).toBeInTheDocument();

    const imgSrc = within(detailsSection).getAllByRole('img')[0].getAttribute('src');
    expect(imgSrc).toBe(mockCards[0].thumbnail);
  });

  test('close button hides the component after clicking', async () => {
    render(<RouterProvider router={createMemoryRouter(getRoutes(), { initialEntries: ['/'] })} />);

    const cards = await screen.findAllByTestId('card');
    userEvent.click(cards[0]);
    const detailsSection = await screen.findByTestId('details');

    const closeButton = await screen.findByTestId('details-close');
    await userEvent.click(closeButton);
    expect(detailsSection).not.toBeInTheDocument();
  });
});