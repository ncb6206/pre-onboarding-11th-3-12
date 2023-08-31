export interface IIssueList {
  id: number;
  number: string;
  title: string;
  user: {
    login: string;
  };
  updated_at: string;
  comments: string;
}

export interface IList {
  key: number;
  id: number;
  number: string;
  title: string;
  writer: string;
  date: string;
  comments: string;
  index: number;
}

export interface IHeader {
  org: string;
  repo: string;
}

export interface IGetIssues {
  org: string;
  repo: string;
  page?: number;
}

export interface IGetIssue extends IGetIssues {
  issueId?: string;
}

export interface IOrgRepo extends IGetIssue {
  setOrg: (value: string) => void;
  setRepo: (value: string) => void;
}
