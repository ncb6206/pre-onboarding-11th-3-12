import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import IssueDetail from '../pages/IssueDetail';
import IssueList from '../pages/IssueList';
import NotFound from '../pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issuedetail/:issueId" element={<IssueDetail />} />
        <Route path="/issuelist" element={<IssueList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
