import { Component } from 'react';
import { StandartProps } from '../../shared/types';

class ErrorButton extends Component<StandartProps> {
  constructor(props: StandartProps) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public state = {
    hasError: false,
  };

  private handleOnClick(): void {
    this.setState({ hasError: true });
  }

  public render(): JSX.Element {
    if (this.state.hasError) {
      throw new Error('Test error');
    }

    return (
      <button className="button main__error-button" onClick={this.handleOnClick}>
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
