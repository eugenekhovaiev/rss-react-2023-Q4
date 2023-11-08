import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchProps } from '../../shared/types';
import { useSearchParams } from 'react-router-dom';

function SearchForm(props: SearchProps): JSX.Element {
  const [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

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
