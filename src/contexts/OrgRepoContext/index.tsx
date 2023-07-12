import { createContext } from 'react';
import { IOrgRepo } from '../../components/models/api';

const orgRepoDefault: IOrgRepo = {
  org: '',
  repo: '',
  number: '',
  setOrg: (value: string) => {},
  setRepo: (value: string) => {},
  setNumber: (value: string) => {},
};

const OrgRepoContext = createContext(orgRepoDefault);

export default OrgRepoContext;
