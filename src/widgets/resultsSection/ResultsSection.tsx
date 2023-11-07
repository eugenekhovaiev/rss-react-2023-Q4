import { Product, ResultsProps } from '../../shared/types';

import Card from '../../entities/card/Card';
import Pagination from '../../entities/pagination/Pagination';
import CardsAmountSelect from '../../entities/cardsAmountSelect/CardsAmountSelect';
import Loader from '../../shared/UI/Loader';

function ResultsSection(props: ResultsProps): JSX.Element {
  return (
    <section className="results">
      <div className="container">
        {props.loaded ? (
          props.cards.length ? (
            <div className="results__wrapper">
              <div className="results__cards">
                {props.cards && props.cards.map((card: Product) => <Card key={card.id} card={card} />)}
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
