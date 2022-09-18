import { useRef } from "react";
import styled from "styled-components";
import Api from "../api";
import { useAppSelector } from "../redux";
import { CommentById } from "../redux/Reducer/CommentByIdReducer";
const Form = () => {
  const CommentState = useAppSelector(CommentById);
  const profileUrlRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const createdAtRef = useRef<HTMLInputElement>(null);
  if (CommentState.loading === "succeeded") {
    profileUrlRef.current!.value = CommentState.data.profile_url;
    authorRef.current!.value = CommentState.data.author;
    contentRef.current!.value = CommentState.data.content;
    createdAtRef.current!.value = CommentState.data.createdAt;
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    const data = {
      profile_url: profileUrlRef.current!.value,
      author: authorRef.current!.value,
      content: contentRef.current!.value,
      createdAt: createdAtRef.current!.value,
    };
    if (CommentState.loading === "succeeded") {
      Api.PutComment(CommentState.data.id, data);
    } else {
      Api.PostComment(data);
    }
    profileUrlRef.current!.value = "";
    authorRef.current!.value = "";
    contentRef.current!.value = "";
    createdAtRef.current!.value = "";
  };
  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          ref={profileUrlRef}
        />
        <br />
        <input type="text" name="author" placeholder="작성자" ref={authorRef} />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          ref={contentRef}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          ref={createdAtRef}
        />
        <br />
        <button type="submit" onClick={(e: any) => submitHandler(e)}>
          등록
        </button>
      </form>
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
