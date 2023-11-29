import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { SearchProps } from '../../shared/types';
import { useRouter } from 'next/router';

function SearchForm(props: SearchProps): JSX.Element {
  const { query } = useRouter();
  const searchQuery = query.search as string;

  const [value, setValue] = useState(searchQuery || '');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setValue(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    props.onSearchRequest(value);
  }

  return (
    <form className="search-form search__form" onSubmit={handleSubmit} data-testid="search-form">
      <input
        type="text"
        className="search-form__input"
        onChange={handleInputChange}
        value={value}
        placeholder="What product are you looking for?"
      />
      <button type="submit" className="button search-form__submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
