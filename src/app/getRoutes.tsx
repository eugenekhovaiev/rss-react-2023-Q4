import { Route, RouteObject, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/Main';
import DetailsSection from '../widgets/detailsSection/DetailsSection';
import loadCardDetails from '../widgets/detailsSection/loadCardDetails';
import { AppContextProvider } from '../shared/lib/AppContext';

const getRoutes = (): RouteObject[] => {
  return createRoutesFromElements(
    <Route
      path="/"
      element={
        <AppContextProvider>
          <Main />
        </AppContextProvider>
      }
      errorElement={
        <div className="error-message">
          <div className="error-message__content">Something went wrong :(</div>
        </div>
      }
    >
      <Route path="product/:id" element={<DetailsSection />} loader={loadCardDetails} />
    </Route>,
  );
};
export default getRoutes;
