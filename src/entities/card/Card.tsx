import { CardProps } from '../../shared/types';

function Card(props: CardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card__line">
        <span className="card__line-title">Name:</span> {props.card.name}
      </div>
      <div className="card__line">
        <span className="card__line-title">Gender:</span> {props.card.gender}
      </div>
      <div className="card__line">
        <span className="card__line-title">Birth year:</span> {props.card.birth_year}
      </div>
      <div className="card__line">
        <span className="card__line-title">Height:</span> {props.card.height}
      </div>
      <div className="card__line">
        <span className="card__line-title">Eye color:</span> {props.card.eye_color}
      </div>
      <div className="card__line">
        <span className="card__line-title">Hair color:</span> {props.card.hair_color}
      </div>
      <div className="card__line">
        <span className="card__line-title">Mass:</span> {props.card.mass}
      </div>
    </div>
  );
}

export default Card;
