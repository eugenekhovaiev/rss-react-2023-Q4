import SearchForm from '../../entities/searchForm/SearchForm';
import { SearchProps } from '../../shared/types';

function SearchSection(props: SearchProps): JSX.Element {
  return (
    <section className="search">
      <div className="container">
        <SearchForm onSearchRequest={props.onSearchRequest} />
      </div>
    </section>
  );
}

export default SearchSection;
