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

export interface SearchProps {
  onSearchRequest: (searchTerm: string) => void;
}

export interface ResultsProps {
  cards: Product[];
  loaded: boolean;
  currPage: number;
  cardsPerPage: number;
  totalItemsCount: number;
  onPageChange: (newPageNumber: number) => void;
}

export interface CardProps {
  card: Product;
}

export interface PaginationProps {
  currPage: number;
  cardsPerPage: number;
  totalItemsCount: number;
  onPageChange: (newPageNumber: number) => void;
}
