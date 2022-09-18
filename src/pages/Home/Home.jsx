import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import commentsSlice, { loadCommentDone } from '@/store/commentsSlice';
import CommentItem from './CommentItem';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();

  const commentsData = useSelector(state => state.comments);
  const { comments, currentList, totalPageNum } = commentsData;
  // console.log(commentsData);

  let CurrnetDataArr = [];

  if (currentList.length > 0) {
    CurrnetDataArr = currentList.map(pageId => comments[pageId]); // 현재 id에 해당되는 값만 전체 comments 데이터에서 빼어 배열로 만든다.
  }

  const [nowPage, setNowPage] = useState(1);

  // < get요청 >
  useEffect(() => {
    dispatch(loadCommentDone(nowPage));
  }, [nowPage]);

  const pageChange = e => {
    setNowPage(e.target.value);
  };

  console.log(CurrnetDataArr, totalPageNum);

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
