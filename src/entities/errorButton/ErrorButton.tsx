import { useState } from 'react';

function ErrorButton(): JSX.Element {
  const [hasError, setHasError] = useState(false);

  function handleOnClick(): void {
    setHasError(true);
  }

  if (hasError) {
    throw new Error('Test error');
  }

  return (
    <button className="button main__error-button" onClick={handleOnClick}>
      Throw Error
    </button>
  );
}

export default ErrorButton;
