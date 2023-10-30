import { Component } from 'react';
import SearchForm from '../../entities/searchForm/SearchForm';

class SearchSection extends Component {
  public render(): JSX.Element {
    return (
      <section className="search">
        <div className="container">
          <SearchForm />
        </div>
      </section>
    );
  }
}

export default SearchSection;
