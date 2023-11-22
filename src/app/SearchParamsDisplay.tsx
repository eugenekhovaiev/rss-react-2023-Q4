import { useSearchParams } from 'react-router-dom';

const SearchParamsDisplay = (): JSX.Element => {
  const [searchParams] = useSearchParams();

  return (
    <div data-testid="search-params-display">
      <div>Limit: {searchParams.get('limit')}</div>
      <div>Page: {searchParams.get('page')}</div>
      <div>Search: {searchParams.get('search')}</div>
    </div>
  );
};

export default SearchParamsDisplay;
