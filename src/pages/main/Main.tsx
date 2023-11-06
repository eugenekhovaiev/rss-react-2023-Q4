import { useState } from 'react';

import SearchSection from '../../widgets/searchSection/SearchSection';
import ResultsSection from '../../widgets/resultsSection/ResultsSection';
import ErrorButton from '../../entities/errorButton/ErrorButton';

import { Product } from '../../shared/types';

function Main(): JSX.Element {
  const [cards, setCards] = useState<Product[] | []>([]);
  const [loaded, setLoaded] = useState(false);

  // function pageChangeHandler(): void {

  // }

  return (
    <main className="main">
      <SearchSection setCards={setCards} setLoaded={setLoaded} />
      <ResultsSection cards={cards} loaded={loaded} />
      <ErrorButton />
    </main>
  );
}

export default Main;
