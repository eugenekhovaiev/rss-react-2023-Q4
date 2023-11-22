import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCards } from '../../shared/lib/store/slices/cardsSlice';

import { Product } from '../../shared/types';

import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';
import ErrorButton from '../../entities/errorButton/ErrorButton';

import getProductsResp from '../../shared/api/getProductsResp';
import INITIAL_CARDS_PER_PAGE from '../../shared/consts/INITIAL_CARDS_ON_PAGE_COUNT';

function Main(): JSX.Element {
  const dispatch = useDispatch();
  const changeCards = (cards: Product[]): void => {
    dispatch(setCards({ cards }));
  };

  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect((): void => {
    (async (): Promise<void> => {
      const savedSearchTerm = localStorage.getItem('searchTerm') || '';

      editSearchParams([
        { param: 'limit', value: searchParams.get('limit') || INITIAL_CARDS_PER_PAGE.toString() },
        { param: 'page', value: searchParams.get('page') || '1' },
        { param: 'search', value: searchParams.get('search') || savedSearchTerm },
      ]);

      const offset = (+searchParams.get('page')! - 1) * +searchParams.get('limit')!;
      const response = await getProductsResp({
        limit: +searchParams.get('limit')!,
        offset: offset,
        searchTerm: searchParams.get('search')!,
      });

      changeCards(response.products);
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
    localStorage.setItem('searchTerm', searchTerm);
    setLoaded(false);

    editSearchParams([
      { param: 'page', value: '1' },
      { param: 'search', value: searchTerm },
    ]);

    const response = await getProductsResp({ limit: +searchParams.get('limit')!, searchTerm: searchTerm });

    changeCards(response.products);
    setLoaded(true);
    setTotalItemsCount(response.total);
  }

  async function handlePageChange(newPageNumber: number): Promise<void> {
    editSearchParams([{ param: 'page', value: newPageNumber.toString() }]);

    const offset = (newPageNumber - 1) * +searchParams.get('limit')!;
    const response = await getProductsResp({
      limit: +searchParams.get('limit')!,
      offset: offset,
      searchTerm: searchParams.get('search')!,
    });

    changeCards(response.products);
  }

  async function handleCardsAmountChange(newCardsAmount: number): Promise<void> {
    setLoaded(false);

    editSearchParams([
      { param: 'limit', value: newCardsAmount.toString() },
      { param: 'page', value: '1' },
    ]);

    const response = await getProductsResp({ limit: newCardsAmount, searchTerm: searchParams.get('search')! });

    changeCards(response.products);
    setLoaded(true);
    setTotalItemsCount(response.total);
  }

  return (
    <main className="main">
      <SearchSection onSearchRequest={handleSearchRequest} />
      <ErrorButton />
      <div className="main__outlet">
        <ResultsSection
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
