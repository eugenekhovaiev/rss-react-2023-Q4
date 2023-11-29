import { Product, ResultsProps } from '../../shared/types';

import { MouseEvent } from 'react';

import Card from '../../entities/card/Card';
import Pagination from '../../entities/pagination/Pagination';
import CardsAmountSelect from '../../entities/cardsAmountSelect/CardsAmountSelect';
import { useRouter } from 'next/router';

function ResultsSection(props: ResultsProps): JSX.Element {
  const cards = props.cards;

  const router = useRouter();

  function handleCloseClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      const currQuery = { ...router.query };
      delete currQuery.details;
      router.push({ pathname: router.pathname, query: currQuery });
    }
  }

  return (
    <section className="results">
      <div className="container">
        {cards.length ? (
          <div className="results__wrapper">
            <div className="results__cards" onClick={handleCloseClick}>
              {cards && cards.map((card: Product) => <Card key={card.id} card={card} />)}
            </div>
            <div className="results__pagination">
              <Pagination totalItemsCount={props.totalItemsCount} onPageChange={props.onPageChange} />
              <CardsAmountSelect onCardsAmountChange={props.onCardsAmountChange} />
            </div>
          </div>
        ) : (
          <div className="loader results__loader">Nothing found for your request :(</div>
        )}
      </div>
    </section>
  );
}

export default ResultsSection;
