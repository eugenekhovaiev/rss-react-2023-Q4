export interface StandartProps {
  children?: JSX.Element;
}

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

export interface Response {
  total: number;
  limit: number;
  skip: number;
  products: Product[];
}

export interface MainProps {
  detailsResponse?: Product;
  cardsResponse: Response;
}

export interface SearchProps {
  onSearchRequest: (searchTerm: string) => void;
}

export interface ResultsProps {
  cards: Product[] | [];
  totalItemsCount: number;
  onPageChange: (newPageNumber: string) => void;
  onCardsAmountChange: (newCardsAmount: string) => void;
}

export interface CardProps {
  card: Product;
}

export interface PaginationProps {
  totalItemsCount: number;
  onPageChange: (newPageNumber: string) => void;
}

export interface CardsAmountSelectProps {
  onCardsAmountChange: (newCardsAmount: string) => void;
}

export interface CardsQueryOptions {
  baseUrl?: string;
  path?: string;
  searchTerm?: string;
  limit?: number;
  offset?: number;
}

export interface CardQueryOptions {
  baseUrl?: string;
  path?: string;
  id: number;
}
