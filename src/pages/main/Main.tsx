import { Component } from 'react';
import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';
import { CardObj } from '../../shared/types';

class Main extends Component {
  constructor(props: object) {
    super(props);
    this.setCards = this.setCards.bind(this);
  }

  public state = {
    cards: [],
  };

  public setCards(cards: CardObj[]): void {
    this.setState({ cards });
  }

  public render(): JSX.Element {
    return (
      <main>
        <SearchSection setCards={this.setCards} />
        <ResultsSection cards={this.state.cards} />
      </main>
    );
  }
}

export default Main;
