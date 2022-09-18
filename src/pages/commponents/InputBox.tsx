import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postCommentApi } from '../../api/api';
import { INITIAL_STATE, postComment } from '../../redux/modules/comment';
import { rootReducer } from '../../redux/store';

const InputBox = () => {
  const input = useSelector((store: ReturnType<typeof rootReducer>) => {
    return store.comment.comment;
  });

  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      postComment({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const addComment: React.MouseEventHandler<HTMLButtonElement> = async (input: any) => {
    await postCommentApi(input);
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
      <Button
        type="submit"
        onClick={e => {
          e.preventDefault();
          addComment(input);
          dispatch(postComment(INITIAL_STATE.comment));
        }}
      >
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
}))``;

const Button = styled.button`
  height: 30px;
`;
