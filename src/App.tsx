import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import OrgRepoProvider from './contexts/OrgRepoProvider';

function App() {
  return (
    <OrgRepoProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </OrgRepoProvider>
  );
}

export default App;
