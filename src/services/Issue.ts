import { IGetIssues, IGetIssue } from '../components/models/api';
import instance from './config';

export const getIssues = async ({ org, repo, page }: IGetIssues) => {
  try {
    const res = await instance.get(
      `/${org}/${repo}/issues?state=open&sort=comments&per_page=16&page=${page}`,
    );
    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

export const getIssue = async ({ org, repo, issueId }: IGetIssue) => {
  try {
    const res = await instance.get(`/${org}/${repo}/issues/${issueId}`);
    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};
