import arrowRight from '@/shared/assets/arrow-right.svg';
import arrowLeft from '@/shared/assets/arrow-left.svg';
import Image from 'next/image';

import { useEffect, useState } from 'react';

import { PaginationProps } from '../../shared/types';
import { useRouter } from 'next/router';

function Pagination(props: PaginationProps): JSX.Element {
  const { query } = useRouter();
  const pageQuery = (query.page as string) || '1';
  const limitQuery = (query.limit as string) || '6';

  const currPage = parseInt(pageQuery);
  const cardsPerPage = parseInt(limitQuery);

  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (currPage >= props.totalItemsCount / cardsPerPage) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
    if (currPage === 1) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage, cardsPerPage]);

  function handleNextClick(): void {
    const newPageNumber = currPage + 1;
    props.onPageChange(newPageNumber.toString());
  }

  function handlePrevClick(): void {
    const newPageNumber = currPage - 1;
    props.onPageChange(newPageNumber.toString());
  }

  return (
    <div className="pagination">
      <button disabled={isFirstPage} className="button pagination__button" onClick={handlePrevClick}>
        <Image src={arrowLeft} alt="previous-page" />
      </button>
      <div className="pagination__number">{currPage}</div>
      <button disabled={isLastPage} className="button pagination__button" onClick={handleNextClick}>
        <Image src={arrowRight} alt="next-page" />
      </button>
    </div>
  );
}

export default Pagination;
