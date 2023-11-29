import { useEffect } from 'react';

import { Response } from '@/shared/types';

import SearchSection from '@/widgets/searchSection/SearchSection';
import ResultsSection from '@/widgets/resultsSection/ResultsSection';
import ErrorButton from '@/entities/errorButton/ErrorButton';
import getProductsResp from '@/shared/api/getProductsResp';

import INITIAL_CARDS_PER_PAGE from '@/shared/consts/INITIAL_CARDS_ON_PAGE_COUNT';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps = (async (context): Promise<{ props: { response: Response } }> => {
  const limitQuery = (context.query.limit as string) || INITIAL_CARDS_PER_PAGE;
  const pageQuery = (context.query.page as string) || '1';
  const searchQuery = (context.query.search as string) || '';

  const offset = ((parseInt(pageQuery) - 1) * parseInt(limitQuery)).toString();

  const response = await getProductsResp({ limit: limitQuery, offset, searchTerm: searchQuery });
  return {
    props: {
      response,
    },
  };
}) satisfies GetServerSideProps<{ response: Response }>;

function Main(props: { response: Response }): JSX.Element {
  const router = useRouter();
  const limitQuery = (router.query.limit as string) || INITIAL_CARDS_PER_PAGE;
  const pageQuery = (router.query.page as string) || '1';
  const searchQuery = (router.query.search as string) || '';

  const cards = props.response.products;
  const totalItemsCount = props.response.total;

  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      router.push({
        pathname: router.pathname,
        query: { limit: limitQuery, page: pageQuery, search: searchQuery },
      });
    }
  }, []);

  async function handleSearchRequest(searchTerm: string): Promise<void> {
    router.push({ pathname: router.pathname, query: { ...router.query, search: searchTerm, page: '1' } });
  }

  async function handlePageChange(newPageNumber: string): Promise<void> {
    router.push({ pathname: router.pathname, query: { ...router.query, page: newPageNumber } });
  }

  async function handleCardsAmountChange(newCardsAmount: string): Promise<void> {
    router.push({ pathname: router.pathname, query: { ...router.query, limit: newCardsAmount, page: '1' } });
  }

  return (
    <main className="main">
      <SearchSection onSearchRequest={handleSearchRequest} />
      <ErrorButton />
      <div className="main__outlet">
        <ResultsSection
          cards={cards}
          loaded={/* loaded  */ true}
          totalItemsCount={totalItemsCount}
          onPageChange={handlePageChange}
          onCardsAmountChange={handleCardsAmountChange}
        />
        {/* <Outlet /> */}
      </div>
    </main>
  );
}

export default Main;
