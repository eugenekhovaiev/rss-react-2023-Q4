import { Component } from 'react';
import SearchForm from '../../entities/searchForm/SearchForm';
import { SearchProps } from '../../shared/types';

class SearchSection extends Component<SearchProps> {
  public render(): JSX.Element {
    return (
      <section className="search">
        <div className="container">
          <SearchForm setCards={this.props.setCards} setLoaded={this.props.setLoaded} />
        </div>
      </section>
    );
  }
}

export default SearchSection;
