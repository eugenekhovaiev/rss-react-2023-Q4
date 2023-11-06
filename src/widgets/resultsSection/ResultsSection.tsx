import { Product, ResultsProps } from '../../shared/types';
import Card from '../../entities/card/Card';
import Pagination from '../../entities/pagination/Pagination';
import { useState } from 'react';

function ResultsSection(props: ResultsProps): JSX.Element {
  const [currPage, setCurrPage] = useState(1);

  function handlePageChange(newPageNumber: number): void {
    setCurrPage(newPageNumber);
  }

  return (
    <section className="results">
      <div className="container">
        {props.loaded ? (
          <div className="results__cards">
            {props.cards && props.cards.map((card: Product) => <Card key={card.id} card={card} />)}
          </div>
        ) : (
          <div className="loader results__loader">Loading...</div>
        )}
        <Pagination currPage={currPage} onPageChange={handlePageChange} />
      </div>
    </section>
  );
}

export default ResultsSection;
