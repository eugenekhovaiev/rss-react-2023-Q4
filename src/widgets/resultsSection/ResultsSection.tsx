import { CardObj, ResultsProps } from '../../shared/types';
import Card from '../../entities/card/Card';
import Pagination from '../../entities/pagination/Pagination';

function ResultsSection(props: ResultsProps): JSX.Element {
  return (
    <section className="results">
      <div className="container">
        {props.loaded ? (
          <div className="results__cards">
            {props.cards && props.cards.map((card: CardObj) => <Card key={card.name} card={card} />)}
          </div>
        ) : (
          <div className="loader results__loader">Loading...</div>
        )}
        <Pagination />
      </div>
    </section>
  );
}

export default ResultsSection;
