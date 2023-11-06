import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchProps } from '../../shared/types';

function SearchForm(props: SearchProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('savedSearchTerm') || '');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    props.onSearchRequest(searchTerm);
  }

  return (
    <form className="search-form search__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        onChange={handleInputChange}
        value={searchTerm}
        placeholder="What product are you looking for?"
      />
      <button type="submit" className="button search-form__submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
