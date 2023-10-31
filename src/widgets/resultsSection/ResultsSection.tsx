import { Component } from 'react';
import { CardObj, ResultsProps } from '../../shared/types';
import Card from '../../entities/card/Card';

class ResultsSection extends Component<ResultsProps> {
  public render(): JSX.Element {
    return (
      <section className="results">
        <div className="container">
          {this.props.loaded ? (
            <div className="results__cards">
              {this.props.cards && this.props.cards.map((card: CardObj) => <Card key={card.name} card={card} />)}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    );
  }
}

export default ResultsSection;
