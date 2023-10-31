export interface CardObj {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface SearchResponse {
  count: string;
  next: string | null;
  previous: string | null;
  results: CardObj[];
}

export interface SearchProps {
  setCards: (cards: CardObj[]) => void;
  setLoaded: (loaded: boolean) => void;
}

export interface ResultsProps {
  cards: CardObj[];
  loaded: boolean;
}

export interface CardProps {
  card: CardObj;
}
