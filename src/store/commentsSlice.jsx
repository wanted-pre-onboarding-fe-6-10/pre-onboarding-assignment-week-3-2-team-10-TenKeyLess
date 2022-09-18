import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {}, // {1:{} , 2: {}, 3:{} ...}
    currentList: [], // [19,20,21,22] - 4개씩만 나옴
  },
  reducers: {
    loadCommentDone: (state, action) => {
      // action.payload = [{},{},{}]

      // comments
      const newState = {};
      action.payload.forEach(data => {
        newState[data.id] = data;
      });

      const updatedState = { ...state.comments, ...newState };

      // currentList
      const arr = [];
      action.payload.forEach(data => arr.push(data.id));

      return { comments: updatedState, currentList: arr };
    },

    deleteComment: (state, action) => {
      const clonedComments = { ...state.comments };
      delete clonedComments[action.payload];

      const clonedCurrentList = state.currentList.filter(num => num !== action.payload);

      return { comments: clonedComments, currentList: clonedCurrentList };
    },
  },
});

export default commentsSlice.reducer;
export const { loadCommentDone, deleteComment } = commentsSlice.actions;
