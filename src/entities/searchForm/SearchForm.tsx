/* eslint-disable no-console */
import { ChangeEvent, Component, FormEvent } from 'react';
import getSearchResponse from '../../shared/api/getSearchResponse';
// import SearchInput from '../../shared/UI/searchInput/SearchInput';

class SearchForm extends Component {
  public state = {
    searchValue: '',
  };

  // constructor(props: SearchFormProps) {
  //   super(props);
  constructor(props: object) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({ searchValue: event.target.value });
  }

  private async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    console.log(this.state.searchValue);
    const result = await getSearchResponse('https://swapi.dev/api/', 'people/', this.state.searchValue);
    console.log(result);
  }

  public render(): JSX.Element {
    return (
      <form className="search__form search-form" onSubmit={this.handleSubmit}>
        {/* <SearchInput /> */}
        <input type="text" className="search-form__input" onChange={this.handleInputChange} />
        <button type="submit" className="search-form__submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
