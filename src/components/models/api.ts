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
}

export interface IHeader {
  orgName: string;
  repoName: string;
}

export interface IOwnerRepo {
  org?: string;
  repo?: string;
}
