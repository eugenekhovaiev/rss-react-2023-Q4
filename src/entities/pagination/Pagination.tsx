import arrowRight from '../../shared/assets/arrow-right.svg';
import arrowLeft from '../../shared/assets/arrow-left.svg';

import { PaginationProps } from '../../shared/types';

function Pagination(props: PaginationProps): JSX.Element {
  function handleNextClick(): void {
    props.onPageChange(props.currPage + 1);
  }

  function handlePrevClick(): void {
    props.onPageChange(props.currPage - 1);
  }

  return (
    <div className="pagination">
      <div className="pagination__wrapper">
        <button className="button pagination__button" onClick={handlePrevClick}>
          <img src={arrowLeft} alt="previous-page" />
        </button>
        <div className="pagination__number">{props.currPage}</div>
        <button className="button pagination__button" onClick={handleNextClick}>
          <img src={arrowRight} alt="next-page" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
