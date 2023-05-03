import axios from 'axios';
import { IJob } from './index';

export const fetchJobs = async (limit: number, ): Promise<IJob[]> => {
  const response = await axios.get(`https://dev.codeleap.co.uk/careers/?limit=${limit}`);
  return response.data.results;
};
