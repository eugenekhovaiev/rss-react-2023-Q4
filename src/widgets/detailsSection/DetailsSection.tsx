import { Product } from '@/shared/types';

import CloseIcon from '../../shared/assets/close.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

function DetailsSection(props: { data: Product }): JSX.Element {
  const router = useRouter();

  function handleCloseClick(): void {
    const currQuery = { ...router.query };
    delete currQuery.details;
    router.push({ pathname: router.pathname, query: currQuery });
  }

  return (
    <section className="details" data-testid="details">
      <div className="card details__card">
        <div className="card__info">
          <div className="card__line">
            <span className="card__line-title">Title:</span> {props.data.title}
          </div>
          <div className="card__line">
            <span className="card__line-title">Brand:</span> {props.data.brand}
          </div>
          <div className="card__line">
            <span className="card__line-title">Price:</span> {props.data.price}
          </div>
          <div className="card__line">
            <span className="card__line-title">Rating:</span> {props.data.rating}
          </div>
          <div className="card__line">
            <span className="card__line-title">Stock:</span> {props.data.stock}
          </div>
          <div className="card__line">
            <span className="card__line-title">Description:</span> {props.data.description}
          </div>
        </div>
        <div className="card__thumbnail">
          <img src={props.data.thumbnail} alt="thumbnail" />
        </div>
        <div className="card__close" onClick={handleCloseClick} data-testid="details-close">
          <Image src={CloseIcon} alt="close-details" />
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
