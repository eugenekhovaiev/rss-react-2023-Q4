import { Product, ResultsProps } from '../../shared/types';

import { MouseEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAppContext } from '../../shared/lib/AppContext';
import Card from '../../entities/card/Card';
import Pagination from '../../entities/pagination/Pagination';
import CardsAmountSelect from '../../entities/cardsAmountSelect/CardsAmountSelect';
import Loader from '../../shared/UI/Loader';

function ResultsSection(props: ResultsProps): JSX.Element {
  const { cards } = useAppContext();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleCloseClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      navigate(`/?${searchParams.toString()}`);
    }
  }

  return (
    <section className="results">
      <div className="container">
        {props.loaded ? (
          cards.length ? (
            <div className="results__wrapper">
              <div className="results__cards" onClick={handleCloseClick}>
                {cards && cards.map((card: Product) => <Card key={card.id} card={card} />)}
              </div>
              <div className="results__pagination">
                <Pagination
                  currPage={props.currPage}
                  cardsPerPage={props.cardsPerPage}
                  totalItemsCount={props.totalItemsCount}
                  onPageChange={props.onPageChange}
                />
                <CardsAmountSelect cardsPerPage={props.cardsPerPage} onCardsAmountChange={props.onCardsAmountChange} />
              </div>
            </div>
          ) : (
            <div className="loader results__loader">Nothing found for your request :(</div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}

export default ResultsSection;
