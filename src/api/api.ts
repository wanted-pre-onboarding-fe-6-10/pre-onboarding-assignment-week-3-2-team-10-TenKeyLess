import axios, { AxiosInstance } from 'axios';
import { Comments } from '../types/types';

const COMMON = 'http://localhost:4000/comments';

export default class JasonServerApi {
  baseURL: string;
  instance: AxiosInstance;

  constructor(baseURL: string = COMMON) {
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
  }

  getComments = async () => {
    return await this.instance.get(this.baseURL);
  };

  postComments = async (data: Comments) => {
    return await this.instance.post(this.baseURL, [data]);
  };

  updateComment = async (id: number, data: Comments) => {
    return await this.instance.put(`${this.baseURL}/${id}`, [data]);
  };
}
