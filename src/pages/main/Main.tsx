import { useEffect, useState } from 'react';

import { Product } from '../../shared/types';

import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';
import ErrorButton from '../../entities/errorButton/ErrorButton';

import getResponse from '../../shared/api/getCards';
import INITIAL_CARDS_PER_PAGE from '../../shared/consts/INITIAL_CARDS_ON_PAGE_COUNT';
import { Outlet, useSearchParams } from 'react-router-dom';

function Main(): JSX.Element {
  const [cards, setCards] = useState<Product[] | []>([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect((): void => {
    (async (): Promise<void> => {
      editSearchParams([
        { param: 'limit', value: searchParams.get('limit') || INITIAL_CARDS_PER_PAGE.toString() },
        { param: 'page', value: searchParams.get('page') || '1' },
        { param: 'search', value: searchParams.get('search') || '' },
      ]);

      const offset = (+searchParams.get('page')! - 1) * +searchParams.get('limit')!;
      const response = await getResponse({
        limit: +searchParams.get('limit')!,
        offset: offset,
        searchTerm: searchParams.get('search')!,
      });

      setCards(response.products);
      setLoaded(true);
      setTotalItemsCount(response.total);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function editSearchParams(paramsObjArr: { param: string; value: string }[]): void {
    setSearchParams((prevSearchParams) => {
      const currentSearchParams = new URLSearchParams(prevSearchParams);
      paramsObjArr.forEach((paramObj) => currentSearchParams.set(paramObj.param, paramObj.value));
      return `?${currentSearchParams.toString()}`;
    });
  }

  async function handleSearchRequest(searchTerm: string): Promise<void> {
    setLoaded(false);

    editSearchParams([
      { param: 'page', value: '1' },
      { param: 'search', value: searchTerm },
    ]);

    const response = await getResponse({ limit: +searchParams.get('limit')!, searchTerm: searchTerm });

    setCards(response.products);
    setLoaded(true);
    setTotalItemsCount(response.total);
  }

  async function handlePageChange(newPageNumber: number): Promise<void> {
    editSearchParams([{ param: 'page', value: newPageNumber.toString() }]);

    const offset = (newPageNumber - 1) * +searchParams.get('limit')!;
    const response = await getResponse({
      limit: +searchParams.get('limit')!,
      offset: offset,
      searchTerm: searchParams.get('search')!,
    });

    setCards(response.products);
  }

  async function handleCardsAmountChange(newCardsAmount: number): Promise<void> {
    setLoaded(false);

    editSearchParams([
      { param: 'limit', value: newCardsAmount.toString() },
      { param: 'page', value: '1' },
    ]);

    const response = await getResponse({ limit: newCardsAmount, searchTerm: searchParams.get('search')! });

    setCards(response.products);
    setLoaded(true);
    setTotalItemsCount(response.total);
  }

  return (
    <main className="main">
      <SearchSection onSearchRequest={handleSearchRequest} />
      <ErrorButton />
      <div className="main__outlet">
        <ResultsSection
          cards={cards}
          loaded={loaded}
          currPage={+searchParams.get('page')!}
          cardsPerPage={+searchParams.get('limit')!}
          totalItemsCount={totalItemsCount}
          onPageChange={handlePageChange}
          onCardsAmountChange={handleCardsAmountChange}
        />
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
