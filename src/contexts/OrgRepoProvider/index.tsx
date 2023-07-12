import { ReactNode, useContext, useState } from 'react';
import OrgRepoContext from '../OrgRepoContext';

const OrgRepoProvider = ({ children }: { children: ReactNode }) => {
  const [org, setOrg] = useState('');
  const [repo, setRepo] = useState('');
  const [number, setNumber] = useState('');

  return (
    <OrgRepoContext.Provider
      value={{ org, repo, number, setOrg, setRepo, setNumber }}
    >
      {children}
    </OrgRepoContext.Provider>
  );
};

export default OrgRepoProvider;
