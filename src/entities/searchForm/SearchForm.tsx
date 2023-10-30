/* eslint-disable no-console */
import { ChangeEvent, Component, FormEvent } from 'react';
import getCards from '../../shared/api/getCards';
import { SearchProps } from '../../shared/types';

class SearchForm extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public state = {
    searchValue: '',
  };

  private handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({ searchValue: event.target.value });
  }

  private async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    console.log(this.state.searchValue);
    const result = await getCards('https://swapi.dev/api/', 'people/', this.state.searchValue);
    this.props.setCards(result);
    console.log(result);
  }

  public render(): JSX.Element {
    return (
      <form className="search__form search-form" onSubmit={this.handleSubmit}>
        <input type="text" className="search-form__input" onChange={this.handleInputChange} />
        <button type="submit" className="search-form__submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
