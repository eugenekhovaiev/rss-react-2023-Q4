import { useLoaderData, useNavigate, useNavigation, useSearchParams } from 'react-router-dom';

import { Product } from '../../shared/types';
import Loader from '../../shared/UI/Loader';

import CloseIcon from '../../shared/assets/close.svg';

function DetailsSection(): JSX.Element {
  const product = useLoaderData() as Product;

  const navigation = useNavigation();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleCloseClick(): void {
    navigate(`/?${searchParams.toString()}`);
  }

  return (
    <section className="details" data-testid="details">
      {navigation.state === 'loading' ? (
        <Loader />
      ) : (
        <div className="card details__card">
          <div className="card__info">
            <div className="card__line">
              <span className="card__line-title">Title:</span> {product.title}
            </div>
            <div className="card__line">
              <span className="card__line-title">Brand:</span> {product.brand}
            </div>
            <div className="card__line">
              <span className="card__line-title">Price:</span> {product.price}
            </div>
            <div className="card__line">
              <span className="card__line-title">Rating:</span> {product.rating}
            </div>
            <div className="card__line">
              <span className="card__line-title">Stock:</span> {product.stock}
            </div>
            <div className="card__line">
              <span className="card__line-title">Description:</span> {product.description}
            </div>
          </div>
          <div className="card__thumbnail">
            <img src={product.thumbnail} alt="thumbnail" />
          </div>
          <div className="card__close" onClick={handleCloseClick}>
            <img src={CloseIcon} alt="thumbnail" />
          </div>
        </div>
      )}
    </section>
  );
}

export default DetailsSection;
