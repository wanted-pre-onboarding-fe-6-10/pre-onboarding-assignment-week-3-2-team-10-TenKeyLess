import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadCommentDone } from '@/store/commentsSlice';
import CommentItem from './CommentItem';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();

  const commentsData = useSelector(state => state.comments);
  const { comments, currentList } = commentsData;

  const CurrnetDataArr = currentList.map(pageId => comments[pageId]); // 현재 id에 해당되는 값만 전체 comments 데이터에서 빼어 배열로 만든다.

  const [nowPage, setNowPage] = useState(1);
  const [totalPageNum, settotalPageNum] = useState([]);

  // < get요청 >
  useEffect(() => {
    axios
      .get(`http://localhost:4000/comments?_page=${nowPage}&_limit=4&_order=desc&_sort=id`)
      .then(result => {
        dispatch(loadCommentDone(result.data));
      });

    // <페이지네이션 - 전체길이 요청>
    axios('http://localhost:4000/comments').then(result => {
      const totalPageNum = Math.ceil(result.data.length / 4);
      let newPageArr = Array(totalPageNum).fill('_');
      newPageArr = newPageArr.map((_, idx) => idx + 1);
      settotalPageNum(newPageArr);
    });
  }, [nowPage]);

  const pageChange = e => {
    setNowPage(e.target.value);
  };

  return (
    <ListWrapper>
      {/* 댓글 */}
      {CurrnetDataArr.length > 0 && (
        <div>
          {CurrnetDataArr.map(comment => (
            <CommentItem key={comment.id} comment={comment} setNowPage={setNowPage} />
          ))}
        </div>
      )}
      {/* 페이지네이션 */}
      {totalPageNum.length > 0 && (
        <PageBox>
          {totalPageNum.map(num => (
            <PageButton key={num} value={num} onClick={pageChange}>
              {num}
            </PageButton>
          ))}
        </PageBox>
      )}

      {/* 작성폼 */}
    </ListWrapper>
  );
};
export default Home;

const ListWrapper = styled.div`
  width: 80%;
  margin: 0 10%;
  background-color: lightgoldenrodyellow;
`;

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rosybrown;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin: 0 5px;
  border: 1px solid black;
  border-radius: 10%;
  cursor: pointer;
`;
