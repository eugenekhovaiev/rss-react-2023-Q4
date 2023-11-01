import { Component } from 'react';
import { CardProps } from '../../shared/types';

class Card extends Component<CardProps> {
  public render(): JSX.Element {
    return (
      <div className="card">
        <div className="card__line">
          <span className="card__line-title">Name:</span> {this.props.card.name}
        </div>
        <div className="card__line">
          <span className="card__line-title">Gender:</span> {this.props.card.gender}
        </div>
        <div className="card__line">
          <span className="card__line-title">Birth year:</span> {this.props.card.birth_year}
        </div>
        <div className="card__line">
          <span className="card__line-title">Height:</span> {this.props.card.height}
        </div>
        <div className="card__line">
          <span className="card__line-title">Eye color:</span> {this.props.card.eye_color}
        </div>
        <div className="card__line">
          <span className="card__line-title">Hair color:</span> {this.props.card.hair_color}
        </div>
        <div className="card__line">
          <span className="card__line-title">Mass:</span> {this.props.card.mass}
        </div>
      </div>
    );
  }
}

export default Card;
