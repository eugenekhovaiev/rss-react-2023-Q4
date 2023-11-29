import { ChangeEvent, useState } from 'react';
import { CardsAmountSelectProps } from '../../shared/types';
import { useRouter } from 'next/router';
import INITIAL_CARDS_PER_PAGE from '@/shared/consts/INITIAL_CARDS_ON_PAGE_COUNT';

function CardsAmountSelect(props: CardsAmountSelectProps): JSX.Element {
  const { query } = useRouter();
  const limitQuery = query.limit as string;
  const [value, setValue] = useState(limitQuery || INITIAL_CARDS_PER_PAGE);

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>): void {
    setValue(event.target.value);
    props.onCardsAmountChange(event.target.value);
  }

  return (
    <div className="cards-amount-select">
      <div className="cards-amount-select__title">Cards per page:</div>
      <select className="cards-amount-select__select" value={value} onChange={handleSelectChange}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="48">48</option>
        <option value="96">96</option>
      </select>
    </div>
  );
}

export default CardsAmountSelect;
