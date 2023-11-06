import { useEffect, useState } from 'react';

import { Product } from '../../shared/types';

import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';
import ErrorButton from '../../entities/errorButton/ErrorButton';

import getResponse from '../../shared/api/getCards';
import INITIAL_CARDS_PER_PAGE from '../../shared/consts/INITIAL_CARDS_ON_PAGE_COUNT';

function Main(): JSX.Element {
  const [cards, setCards] = useState<Product[] | []>([]);

  const [currPage, setCurrPage] = useState(1);
  const [cardsPerPage] = useState(INITIAL_CARDS_PER_PAGE);
  const [totalItemsCount, setTotalItemsCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');

  const [loaded, setLoaded] = useState(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      const savedSearchTerm = localStorage.getItem('savedSearchTerm') || '';
      const response = await getResponse({ searchTerm: savedSearchTerm });

      setCards(response.products);
      setSearchTerm(savedSearchTerm);
      setLoaded(true);
      setTotalItemsCount(response.total);
    })();
  }, []);

  async function handleSearchRequest(searchTerm: string): Promise<void> {
    setLoaded(false);
    setCurrPage(1);

    localStorage.setItem('savedSearchTerm', searchTerm);
    setSearchTerm(searchTerm);
    const response = await getResponse({ searchTerm: searchTerm });

    setCards(response.products);
    setLoaded(true);
    setTotalItemsCount(response.total);
  }

  async function handlePageChange(newPageNumber: number): Promise<void> {
    setCurrPage(newPageNumber);
    const offset = (newPageNumber - 1) * cardsPerPage;
    const response = await getResponse({ limit: cardsPerPage, offset: offset, searchTerm: searchTerm });
    setCards(response.products);
  }

  return (
    <main className="main">
      <SearchSection onSearchRequest={handleSearchRequest} />
      <ResultsSection
        cards={cards}
        loaded={loaded}
        currPage={currPage}
        cardsPerPage={cardsPerPage}
        totalItemsCount={totalItemsCount}
        onPageChange={handlePageChange}
      />
      <ErrorButton />
    </main>
  );
}

export default Main;
