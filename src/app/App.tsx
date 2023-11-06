import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/Main';

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Main />} />));

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
