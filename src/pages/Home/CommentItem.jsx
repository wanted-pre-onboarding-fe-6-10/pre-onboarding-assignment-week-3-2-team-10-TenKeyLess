import axios from 'axios';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '@/store/commentsSlice';

const CommentItem = ({ comment, setNowPage }) => {
  const { id, author, content, createdAt, profile_url } = comment;
  const dispatch = useDispatch();

  const deleteRequest = () => {
    axios.delete(`http://localhost:4000/comments/${id}`);
    dispatch(deleteComment(id));
    setNowPage(1);
  };

  return (
    <CommentWrapper id={id}>
      <CommentHeader>
        <User>
          <span>{id}</span>
          <UserImg src={profile_url} alt="userImg" />
          <span>{author}</span>
        </User>
        <CreatDate>{createdAt}</CreatDate>
      </CommentHeader>
      <Content>{content}</Content>
      <Buttons>
        <button type="button">수정</button>
        <button type="button" onClick={deleteRequest}>
          삭제
        </button>
      </Buttons>
    </CommentWrapper>
  );
};

export default CommentItem;

const CommentWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid rebeccapurple;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  margin-right: 1rem;
  border-radius: 50%;
`;

const CreatDate = styled.p`
  margin: 0.6rem;
`;

const Content = styled.div`
  padding: 1rem 0;
`;

const Buttons = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: right;

  button {
    background-color: whitesmoke;
    border: 0.2px solid gray;
    border-radius: 15%;
    padding: 5px 10px;
    margin-left: 1rem;
  }
`;
