import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadCommentDone, setCurrentPage } from '@/store/commentsSlice';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

const Home = () => {
  const dispatch = useDispatch();

  const commentsData = useSelector(state => state.comments);
  const { comments, currentPage, totalLegnth } = commentsData;

  let CurrnetDataArr = comments.slice((currentPage - 1) * 4, currentPage * 4);
  const pagenationArr = Array(Math.ceil(totalLegnth / 4))
    .fill('_')
    .map((_, idx) => idx + 1);

  // < get요청 - 초기 한번 렌더함, 페이지버튼 클릭시 get요청x >
  useEffect(() => {
    dispatch(loadCommentDone());
  }, []);

  const pageChange = e => {
    const clickedNum = e.target.value;
    dispatch(setCurrentPage(clickedNum));
  };

  return (
    <ListWrapper>
      {/* 댓글  */}
      {CurrnetDataArr.length > 0 && (
        <div>
          {CurrnetDataArr.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
      {/* 페이지네이션 */}
      {pagenationArr.length > 0 && (
        <PageBox>
          {pagenationArr.map(num => (
            <PageButton key={num} value={num} onClick={pageChange}>
              {num}
            </PageButton>
          ))}
        </PageBox>
      )}

      {/* 작성폼 */}
      <CommentForm />
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
