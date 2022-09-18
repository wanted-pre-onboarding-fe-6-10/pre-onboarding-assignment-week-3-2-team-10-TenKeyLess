import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// <페이지네이션 - 전체길이 요청, 별도 함수로 분리>
const getPagenationArr = async () => {
  const response = await axios.get(`http://localhost:4000/comments`);
  const totalPageNum = Math.ceil(response.data.length / 4);
  let pagenationArr = Array(totalPageNum).fill('_');
  pagenationArr = pagenationArr.map((_, idx) => idx + 1);
  return pagenationArr;
};

export const loadCommentDone = createAsyncThunk('GET_TODO', async (nowPage, thunkApi) => {
  try {
    // <data get요청>
    const getNowData = await axios.get(
      `http://localhost:4000/comments?_page=${nowPage}&_limit=4&_order=desc&_sort=id`
    );

    return Promise.all([getNowData, getPagenationArr()]).then(response => {
      // console.log(response); // [ {data: Array(4), status: 200,..} , Array(4)]
      return { nowData: response[0].data, pageLength: response[1] };
    });
  } catch {
    return thunkApi.rejectWithValue('err'); // [질문] rejected가 안된다.
  }
});

export const deleteComment = createAsyncThunk('DELETE_TODO', async (id, thunkApi) => {
  try {
    await axios.delete(`http://localhost:4000/comments/${id}`);
    const pagenationArr = await getPagenationArr(); // 삭제 후 페이지 길이 다시 계산 // [질문] - 그냥 변수로 받아도 되는지?
    return { id: id, pagenationArr: pagenationArr };
  } catch {
    return thunkApi.rejectWithValue('err');
  }
});

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {}, // {1:{} , 2: {}, 3:{} ...}
    currentList: [], // [19,20,21,22] - 4개씩만 나옴
    totalPageNum: [],
  },
  reducers: {},
  extraReducers: builder => {
    // < get요청 성공시 >
    builder.addCase(loadCommentDone.fulfilled, (state, action) => {
      // comments
      const newCommentState = {};
      action.payload.nowData.forEach(data => {
        newCommentState[data.id] = data;
      });

      const updatedState = { ...state.comments, ...newCommentState };

      // currentList
      const idArr = [];
      action.payload.nowData.forEach(data => idArr.push(data.id));

      // totalPageNum
      const totalPageNum = action.payload.pageLength;

      return { comments: updatedState, currentList: idArr, totalPageNum: totalPageNum };
    });

    // < 삭제 성공시 >
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      const clonedComments = { ...state.comments };
      delete clonedComments[action.payload.id];
      const clonedCurrentList = state.currentList.filter(num => num !== action.payload.id);
      return {
        comments: clonedComments,
        currentList: clonedCurrentList,
        totalPageNum: action.payload.pagenationArr,
      };
    });

    // < 삭제 실패시 >
    builder.addCase(deleteComment.rejected, (state, action) => {
      alert('삭제 실패하였습니다');
      return state; // 항상 state값을 반환해야함.
    });
  },
});

export default commentsSlice.reducer;
