import { Product, ResultsProps } from '../../shared/types';
import Card from '../../entities/card/Card';
import Pagination from '../../entities/pagination/Pagination';

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
              <Pagination
                currPage={props.currPage}
                cardsPerPage={props.cardsPerPage}
                totalItemsCount={props.totalItemsCount}
                onPageChange={props.onPageChange}
              />
            </div>
          ) : (
            <div className="loader results__loader">Nothing found for your request :(</div>
          )
        ) : (
          <div className="loader results__loader">Loading...</div>
        )}
      </div>
    </section>
  );
}

export default ResultsSection;
