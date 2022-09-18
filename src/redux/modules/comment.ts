import { Comments } from '../../types/types';

// Action Type

export const GET_COMMENTS = 'comment/GET_COMMENTS' as const;
export const POST_COMMENTS = 'comment/POST_COMMENTS' as const;
export const DELETE_COMMENTS = 'comment/DELETE_COMMENTS' as const;

// // Action Creator

export const getComment = (comment: Array<Comments>) => {
  return { type: GET_COMMENTS, payload: comment };
};

export const postComment = (comment: any) => {
  return { type: POST_COMMENTS, payload: comment };
};

export const deleteComment = (id: number) => {
  return { type: DELETE_COMMENTS, id };
};

// Initail State

export const INITIAL_STATE: { commentList: Array<Comments>; comment: Comments } = {
  commentList: [],
  comment: {
    id: 0,
    author: '',
    content: '',
    profile_url: '',
    createdAt: '',
  },
};

// Reducer

const commentReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, commentList: action.payload };
    case POST_COMMENTS:
      return { ...state, comment: action.payload };
    case DELETE_COMMENTS:
      const newList = state.commentList.filter(comment => {
        return comment.id !== action.id;
      });
      return { ...state, commentList: newList };
    default:
      return state;
  }
};

export default commentReducer;
