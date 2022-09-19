import { Comments } from '../../types/types';

// Action Type

export const GET_COMMENTS = 'comment/GET_COMMENTS' as const;
export const ADD_COMMENTS = 'comment/ADD_COMMENTS' as const;
export const POST_COMMENTS = 'comment/POST_COMMENTS' as const;
export const DELETE_COMMENTS = 'comment/DELETE_COMMENTS' as const;
export const UPDATE_COMMENTS = 'comment/UPDATE_COMMENTS' as const;
export const EDIT_MODE = 'comment/EDIT_MODE' as const;
export const MOVE_PAGE = 'comment/MOVE_PAGE' as const;
export const PAGINATION = 'comment/PAGINATION' as const;

// // Action Creator

export const getComment = (comment: Array<Comments>) => {
  return { type: GET_COMMENTS, payload: comment };
};

export const addNewComment = (comment: Comments) => {
  return { type: ADD_COMMENTS, payload: comment };
};

export const postComment = (comment: Comments) => {
  return { type: POST_COMMENTS, payload: comment };
};

export const deleteComment = (id: number) => {
  return { type: DELETE_COMMENTS, id };
};

export const updateComment = (id: number, comment: Comments) => {
  return { type: UPDATE_COMMENTS, payload: comment, id };
};

export const editMode = (mode: boolean) => {
  return { type: EDIT_MODE, mode };
};

export const movePage = (page: string) => {
  return { type: MOVE_PAGE, page };
};

export const pagination = (comment: Array<Comments>) => {
  return { type: PAGINATION, payload: comment };
};

// Initail State

export const INITIAL_STATE: {
  commentList: Array<Comments>;
  comment: Comments;
  page: string;
  editMode: boolean;
  pages: string[];
} = {
  commentList: [],
  comment: {
    id: 0,
    author: '',
    content: '',
    profile_url: '',
    createdAt: '',
  },
  page: '1',
  pages: [],
  editMode: false,
};

// Reducer

const commentReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, commentList: action.payload };

    case ADD_COMMENTS:
      const addedList = [...state.commentList, action.payload];
      return { ...state, commentList: addedList };

    case POST_COMMENTS:
      return { ...state, comment: action.payload };

    case DELETE_COMMENTS:
      const newList = state.commentList.filter(comment => {
        return comment.id !== action.id;
      });
      return { ...state, commentList: newList };

    case UPDATE_COMMENTS:
      const updatedList = state.commentList.map(comment => {
        return comment.id === action.id ? action.payload : comment;
      });
      return { ...state, commentList: updatedList };

    case EDIT_MODE:
      return { ...state, editMode: action.mode };

    case MOVE_PAGE:
      return { ...state, page: action.page };

    case PAGINATION:
      const pagination = Array.from(
        { length: Math.ceil(action.payload.length / 5) },
        (value, index) => (index + 1).toString()
      );
      return { ...state, pages: pagination };

    default:
      return state;
  }
};

export default commentReducer;
