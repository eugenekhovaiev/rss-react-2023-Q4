/* eslint-disable no-console */
import { ChangeEvent, Component, FormEvent } from 'react';
import getCards from '../../shared/api/getCards';
import { SearchProps } from '../../shared/types';
import API_DATA from '../../shared/consts/API_DATA';

class SearchForm extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public state = {
    searchValue: localStorage.getItem('savedSearchValue') || '',
  };

  public async componentDidMount(): Promise<void> {
    const result = await getCards(API_DATA.baseUrl, API_DATA.path, this.state.searchValue);
    this.props.setCards(result);
    this.props.setLoaded(true);
  }

  private handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({ searchValue: event.target.value });
  }

  private async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    this.props.setLoaded(false);

    localStorage.setItem('savedSearchValue', this.state.searchValue);
    console.log(this.state.searchValue);
    const result = await getCards(API_DATA.baseUrl, API_DATA.path, this.state.searchValue);
    this.props.setCards(result);
    this.props.setLoaded(true);
    console.log(result);
  }

  public render(): JSX.Element {
    return (
      <form className="search__form search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          onChange={this.handleInputChange}
          value={this.state.searchValue}
          placeholder="What Start Wars character are you looking for?"
        />
        <button type="submit" className="search-form__submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
