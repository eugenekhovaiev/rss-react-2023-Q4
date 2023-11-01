import { Component } from 'react';
import { StandartProps } from '../../shared/types';

class ErrorBoundary extends Component<StandartProps> {
  public state = {
    hasError: false,
  };

  public static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  public componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  public render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          <div className="error-message__content">Something went wrong :(</div>
        </div>
      );
    }

    return this.props.children || <></>;
  }
}

export default ErrorBoundary;
