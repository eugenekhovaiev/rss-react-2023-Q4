import { Component } from 'react';
import { CardProps } from '../../shared/types';

class Card extends Component<CardProps> {
  public render(): JSX.Element {
    return (
      <div className="card">
        <div className="card__name">Name: {this.props.card.name}</div>
        <div className="card__gender">Gender: {this.props.card.gender}</div>
        <div className="card__birth-year">Birth year: {this.props.card.birth_year}</div>
        <div className="card__height">Height: {this.props.card.height}</div>
        <div className="card__eye-color">Eye color: {this.props.card.eye_color}</div>
        <div className="card__hair-color">Hair color: {this.props.card.hair_color}</div>
        <div className="card__mass">Mass: {this.props.card.mass}</div>
      </div>
    );
  }
}

export default Card;
