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
  setCards: (cards: Product[]) => void;
  setLoaded: (loaded: boolean) => void;
}

export interface ResultsProps {
  cards: Product[];
  loaded: boolean;
}

export interface CardProps {
  card: Product;
}

export interface PaginationProps {
  onPageChange: (newPageNumber: number) => void;
  currPage: number;
}
