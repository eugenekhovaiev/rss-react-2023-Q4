// import { useNavigate, useSearchParams } from 'react-router-dom';
import { CardProps } from '../../shared/types';

function Card(props: CardProps): JSX.Element {
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // function handleClick(): void {
  //   navigate(`/product/${props.card.id}/?${searchParams.toString()}`);
  // }

  return (
    <div className="card" data-testid="card" /* onClick={handleClick} */>
      <div className="card__info">
        <div className="card__line">
          <span className="card__line-title">Title:</span> {props.card.title}
        </div>
        <div className="card__line">
          <span className="card__line-title">Brand:</span> {props.card.brand}
        </div>
        <div className="card__line">
          <span className="card__line-title">Price:</span> {props.card.price}
        </div>
        <div className="card__line">
          <span className="card__line-title">Rating:</span> {props.card.rating}
        </div>
      </div>
      <div className="card__thumbnail">
        <img src={props.card.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Card;
