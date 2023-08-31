import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import OrgRepoProvider from './contexts/OrgRepoProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OrgRepoProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrgRepoProvider>
    </QueryClientProvider>
  );
}

export default App;
