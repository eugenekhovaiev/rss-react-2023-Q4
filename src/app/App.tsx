import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/Main';
import DetailsSection from '../widgets/detailsSection/DetailsSection';
import loadCardDetails from '../widgets/detailsSection/loadCardDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="product/:id" element={<DetailsSection />} loader={loadCardDetails} />
    </Route>,
  ),
);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
