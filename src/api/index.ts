import axios from 'axios';

interface CommentState {
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Comments = '/comments';
const Axios = axios.create({
  baseURL: BASE_URL,
});

class API {
  GetComments = async (
    page: number | null = null,
    limit: number = 30,
    order: 'desc' | 'asc' = 'desc',
    sort: 'id' | 'author' | null = 'id'
  ) => {
    if (page === null) {
      return Axios.get(`${Comments}?_order=${order}&_sort=${sort}`);
    }
    if (sort === null) {
      return Axios.get(`${Comments}?_page=${page}&_limit=${limit}`);
    }
    return Axios.get(
      `${Comments}?_page=${page}&_limit=${limit}&_order=${order}&_sort=${sort}`
    );
  };
  GetCommentById = async (CommentId: number) => {
    return Axios.get(`${Comments}/${CommentId}`);
  };
  PostComment = async (Comment: CommentState) => {
    return Axios.post(`${Comments}`, Comment);
  };
  DeleteComment = async (CommentId: number) => {
    return Axios.delete(`${Comments}/${CommentId}`);
  };
  PutComment = async (CommentId: number, Comment: CommentState) => {
    return Axios.put(`${Comments}/${CommentId}`, Comment);
  };
}

// export const GetComments = async (
//   page: number | null = null,
//   limit: number = 30,
//   order: 'desc' | 'asc' = 'desc',
//   sort: 'id' | 'author' | null = 'id'
// ) => {
//   if (page === null) {
//     return Axios.get(`${Comments}?_order=${order}&_sort=${sort}`);
//   }
//   if (sort === null) {
//     return Axios.get(`${Comments}?_page=${page}&_limit=${limit}`);
//   }
//   return Axios.get(
//     `${Comments}?_page=${page}&_limit=${limit}&_order=${order}&_sort=${sort}`
//   );
// };

// export const PostComments = async (comment: CommentState) => {
//   return Axios.post(`${Comments}`, comment);
// };

const Api = new API();

export default Api;
