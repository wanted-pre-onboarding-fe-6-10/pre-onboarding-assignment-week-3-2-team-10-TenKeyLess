import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCommentApi, postCommentApi, putCommentApi } from '../../api/api';
import {
  addNewComment,
  editMode,
  getComment,
  INITIAL_STATE,
  movePage,
  postComment,
  updateComment,
} from '../../redux/modules/comment';
import { rootReducer } from '../../redux/store';

const InputBox = () => {
  const comment = useSelector((store: ReturnType<typeof rootReducer>) => {
    return store.comment;
  });

  const input = comment.comment;
  const mode = comment.editMode;
  const page = comment.page;

  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      postComment({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const addComment = async () => {
    await postCommentApi(input);
    dispatch(addNewComment(input));
    dispatch(postComment(INITIAL_STATE.comment));
    dispatch(movePage('1'));
    const response = await getCommentApi(page);
    dispatch(getComment(response));
  };

  const putComment = async () => {
    await putCommentApi(input.id, input);
    dispatch(updateComment(input.id, input));
    dispatch(postComment(INITIAL_STATE.comment));
    dispatch(editMode(false));
  };

  const register: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    mode ? putComment() : addComment();
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="프로필"
        value={input.profile_url}
        name="profile_url"
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder="작성자"
        name="author"
        value={input.author}
        onChange={onChange}
      />
      <Input
        type="textarea"
        placeholder="내용"
        name="content"
        value={input.content}
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder="작성일"
        name="createdAt"
        value={input.createdAt}
        onChange={onChange}
      />
      <Button type="submit" onClick={register}>
        등록하기
      </Button>
    </Container>
  );
};

export default InputBox;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholer: props.placeholder,
}))`
  margin: 0 1rem 1rem 1rem;
`;

const Button = styled.button`
  height: 30px;
  margin: 0 1rem 1rem 1rem;
`;
