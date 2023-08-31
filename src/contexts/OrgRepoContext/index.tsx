import { createContext } from 'react';
import { IOrgRepo } from '../../components/models/api';

const orgRepoDefault: IOrgRepo = {
  org: '',
  repo: '',
  setOrg: (value: string) => {},
  setRepo: (value: string) => {},
};

const OrgRepoContext = createContext(orgRepoDefault);

export default OrgRepoContext;
