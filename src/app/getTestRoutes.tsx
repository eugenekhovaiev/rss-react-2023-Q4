import { Route, RouteObject, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/Main';
import DetailsSection from '../widgets/detailsSection/DetailsSection';
import loadCardDetails from '../widgets/detailsSection/loadCardDetails';
import SearchParamsDisplay from './SearchParamsDisplay';
import Page404 from '../pages/page404/Page404';

import { Provider } from 'react-redux';
import store from '../shared/lib/store/store';

const getTestRoutes = (): RouteObject[] => {
  return createRoutesFromElements(
    <Route
      path="/"
      element={
        <Provider store={store}>
          <div>
            <Main />
            <SearchParamsDisplay />
          </div>
        </Provider>
      }
      errorElement={
        <div className="error-message">
          <div className="error-message__content">Something went wrong :(</div>
        </div>
      }
    >
      <Route path="product/:id" element={<DetailsSection />} loader={loadCardDetails} />
      <Route path="*" element={<Page404 />} />,
    </Route>,
  );
};
export default getTestRoutes;
