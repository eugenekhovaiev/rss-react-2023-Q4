import { Component } from 'react';
import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';

class Main extends Component {
  public render(): JSX.Element {
    return (
      <main>
        <SearchSection />
        <ResultsSection />
      </main>
    );
  }
}

export default Main;
