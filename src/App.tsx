import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyle } from './helpers/variables.global';
import CountriesProvider from './context/CountriesContext';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
