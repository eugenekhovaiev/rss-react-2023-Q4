import { createContext, useContext, useState } from 'react';
import { AppContextType, Product, StandartProps } from '../types';
import { useSearchParams } from 'react-router-dom';

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export function AppContextProvider({ children }: StandartProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [cards, setCards] = useState<Product[] | []>([]);

  const value = {
    searchTerm,
    setSearchTerm,
    cards,
    setCards,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
