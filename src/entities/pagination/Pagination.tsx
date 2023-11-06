import arrowRight from '../../shared/assets/arrow-right.svg';
import arrowLeft from '../../shared/assets/arrow-left.svg';

import { useEffect, useState } from 'react';

import { PaginationProps } from '../../shared/types';

function Pagination(props: PaginationProps): JSX.Element {
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (props.currPage >= props.totalItemsCount / props.cardsPerPage) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
    if (props.currPage === 1) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currPage, props.totalItemsCount]);

  function handleNextClick(): void {
    const newPageNumber = props.currPage + 1;

    // setIsFirstPage(false);

    props.onPageChange(newPageNumber);
  }

  function handlePrevClick(): void {
    const newPageNumber = props.currPage - 1;

    // setIsLastPage(false);

    props.onPageChange(newPageNumber);
  }

  return (
    <div className="pagination">
      <div className="pagination__wrapper">
        <button disabled={isFirstPage} className="button pagination__button" onClick={handlePrevClick}>
          <img src={arrowLeft} alt="previous-page" />
        </button>
        <div className="pagination__number">{props.currPage}</div>
        <button disabled={isLastPage} className="button pagination__button" onClick={handleNextClick}>
          <img src={arrowRight} alt="next-page" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
