import { IGetIssues, IGetIssue } from '../components/models/api';
import instance from './config';

export const getIssues = async ({ org, repo, page }: IGetIssues) => {
  try {
    const res = await instance.get(
      `/${org}/${repo}/issues?state=open&sort=comments&page=${page}&per_page=15`,
    );
    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

export const getIssue = async ({ org, repo, number }: IGetIssue) => {
  try {
    const res = await instance.get(`/${org}/${repo}/issues/${number}`);
    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};
