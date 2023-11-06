import arrowRight from '../../shared/assets/arrow-right.svg';
import arrowLeft from '../../shared/assets/arrow-left.svg';

function Pagination(): JSX.Element {
  return (
    <div className="pagination">
      <div className="pagination__wrapper">
        <button className="button pagination__button">
          <img src={arrowLeft} alt="previous-page" />
        </button>
        <div className="pagination__number">1</div>
        <button className="button pagination__button">
          <img src={arrowRight} alt="next-page" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
