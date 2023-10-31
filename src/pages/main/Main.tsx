import { Component } from 'react';
import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';
import { CardObj } from '../../shared/types';
import ErrorBoundary from '../../entities/errorBoundary/ErrorBoundary';
import ErrorButton from '../../entities/errorButton/ErrorButton';

class Main extends Component {
  constructor(props: object) {
    super(props);
    this.setCards = this.setCards.bind(this);
    this.setLoaded = this.setLoaded.bind(this);
  }

  public state = {
    cards: [],
    loaded: false,
  };

  public setCards(cards: CardObj[]): void {
    this.setState({ cards });
  }

  public setLoaded(loaded: boolean): void {
    this.setState({ loaded });
  }

  public render(): JSX.Element {
    return (
      <main>
        <SearchSection setCards={this.setCards} setLoaded={this.setLoaded} />
        <ResultsSection cards={this.state.cards} loaded={this.state.loaded} />
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      </main>
    );
  }
}

export default Main;
