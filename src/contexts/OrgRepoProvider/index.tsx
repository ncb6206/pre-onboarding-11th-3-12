import { ReactNode, useState } from 'react';
import OrgRepoContext from '../OrgRepoContext';

const OrgRepoProvider = ({ children }: { children: ReactNode }) => {
  const [org, setOrg] = useState('');
  const [repo, setRepo] = useState('');

  return (
    <OrgRepoContext.Provider value={{ org, repo, setOrg, setRepo }}>
      {children}
    </OrgRepoContext.Provider>
  );
};

export default OrgRepoProvider;
