import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchProps } from '../../shared/types';
import { setSearchTerm } from '../../shared/lib/store/slices/searchSlice';
import { RootState } from '../../shared/lib/store/store';

function SearchForm(props: SearchProps): JSX.Element {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const dispatch = useDispatch();
  const changeSearchTerm = (searchTerm: string): void => {
    dispatch(setSearchTerm({ searchTerm }));
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    changeSearchTerm(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    props.onSearchRequest(searchTerm);
  }

  return (
    <form className="search-form search__form" onSubmit={handleSubmit} data-testid="search-form">
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
