import { IOwnerRepo } from '../components/models/api';
import instance from './config';

export const getIssue = async (props: IOwnerRepo) => {
  try {
    const res = await instance.get(
      `/${props.org}/${props.repo}/issues?state=open&sort=comments`,
    );
    return res;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};
