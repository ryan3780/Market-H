import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  );
}

export default App;
