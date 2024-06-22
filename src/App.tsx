import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
