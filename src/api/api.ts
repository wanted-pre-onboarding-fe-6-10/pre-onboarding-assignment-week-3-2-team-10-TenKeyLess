import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Comments } from '../types/types';

const COMMON = 'http://localhost:4000/comments';

const axiosConfig: AxiosRequestConfig = { baseURL: COMMON };

export const instance: AxiosInstance = axios.create(axiosConfig);

export const getCommentApi = async () => {
  try {
    const { data } = await instance.get('/');
    return data;
  } catch {
    console.error('err');
  }
};

export const postCommentApi = async (comment: Comments) => {
  try {
    const { data } = await instance.post('/', comment);
    return data;
  } catch {
    console.error('err');
  }
};

export const putCommentApi = async (id: number, comment: Comments) => {
  try {
    const { data } = await instance.put(`/${id}`, comment);
    return data;
  } catch {
    console.error('err');
  }
};

export const deleteCommentApi = async (id: number) => {
  try {
    const { data } = await instance.delete(`/${id}`);
    return data;
  } catch {
    console.error('err');
  }
};
