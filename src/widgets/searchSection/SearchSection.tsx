import SearchForm from '../../entities/searchForm/SearchForm';
import { SearchProps } from '../../shared/types';

function SearchSection(props: SearchProps): JSX.Element {
  return (
    <section className="search">
      <div className="container">
        <SearchForm setCards={props.setCards} setLoaded={props.setLoaded} />
      </div>
    </section>
  );
}

export default SearchSection;
