// import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// import Loader from '../../shared/UI/Loader';

// import CloseIcon from '../../shared/assets/close.svg';
// import { useGetCardQuery } from '../../shared/api/cardsApi';

function DetailsSection(): JSX.Element {
  // const location = useLocation();
  // const productId = location.pathname.split('/')[2];

  // const { data, isFetching } = useGetCardQuery({ id: +productId });

  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // function handleCloseClick(): void {
  //   navigate(`/?${searchParams.toString()}`);
  // }

  return (
    // <section className="details" data-testid="details">
    //   {isFetching ? (
    //     <Loader />
    //   ) : (
    //     <div className="card details__card">
    //       <div className="card__info">
    //         <div className="card__line">
    //           <span className="card__line-title">Title:</span> {data!.title}
    //         </div>
    //         <div className="card__line">
    //           <span className="card__line-title">Brand:</span> {data!.brand}
    //         </div>
    //         <div className="card__line">
    //           <span className="card__line-title">Price:</span> {data!.price}
    //         </div>
    //         <div className="card__line">
    //           <span className="card__line-title">Rating:</span> {data!.rating}
    //         </div>
    //         <div className="card__line">
    //           <span className="card__line-title">Stock:</span> {data!.stock}
    //         </div>
    //         <div className="card__line">
    //           <span className="card__line-title">Description:</span> {data!.description}
    //         </div>
    //       </div>
    //       <div className="card__thumbnail">
    //         <img src={data!.thumbnail} alt="thumbnail" />
    //       </div>
    //       <div className="card__close" onClick={handleCloseClick} data-testid="details-close">
    //         <img src={CloseIcon} alt="close-details" />
    //       </div>
    //     </div>
    //   )}
    // </section>
    <span>details section</span>
  );
}

export default DetailsSection;
