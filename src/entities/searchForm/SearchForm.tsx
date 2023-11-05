import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import getCards from '../../shared/api/getCards';
import { SearchProps } from '../../shared/types';
import API_DATA from '../../shared/consts/API_DATA';

function SearchForm(props: SearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('savedSearchValue') || '');

  useEffect((): void => {
    (async (): Promise<void> => {
      const result = await getCards(API_DATA.baseUrl, API_DATA.path, searchValue);

      props.setCards(result);
      props.setLoaded(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setSearchValue(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    props.setLoaded(false);

    localStorage.setItem('savedSearchValue', searchValue);
    const result = await getCards(API_DATA.baseUrl, API_DATA.path, searchValue);

    props.setCards(result);
    props.setLoaded(true);
  }

  return (
    <form className="search-form search__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="What Start Wars character are you looking for?"
      />
      <button type="submit" className="button search-form__submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
