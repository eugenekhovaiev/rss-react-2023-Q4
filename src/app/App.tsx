import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/Main';
import DetailsSection from '../widgets/detailsSection/DetailsSection';
// import loadCardDetails from '../widgets/detailsSection/loadCardDetails';
import Page404 from '../pages/page404/Page404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Main />}
      errorElement={
        <div className="error-message">
          <div className="error-message__content">Something went wrong :(</div>
        </div>
      }
    >
      {/* <Route path="product/:id" element={<DetailsSection />} loader={loadCardDetails} /> */}
      <Route path="product/:id" element={<DetailsSection />} />
      <Route path="*" element={<Page404 />} />,
    </Route>,
  ),
);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
