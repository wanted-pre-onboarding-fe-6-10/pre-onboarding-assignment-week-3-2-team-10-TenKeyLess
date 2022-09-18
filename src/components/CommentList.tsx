import styled from "styled-components";
import { useAppSelector } from "../redux";
import { Comments } from "../redux/Reducer/CommentsReducer";
import { Pages } from "../redux/Reducer/PageReducer";
import { perPage } from "../utils/page.utill";
import { fetchCommentById } from "../redux/Reducer/CommentByIdReducer";
import { useAppDispatch } from "../redux";

const CommentList = () => {
  const commentList = useAppSelector(Comments);
  const pageState = useAppSelector(Pages);
  const dispatch = useAppDispatch();
  const currentPage = perPage(pageState.page, pageState.limit);
  const commentsPerpage = commentList.slice(
    currentPage.startPage,
    currentPage.last
  );

  const updateHandler = (id: number) => {
    dispatch(fetchCommentById(id));
  };
  const deleteHandler = () => {};
  return (
    <>
      {commentsPerpage.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <a onClick={() => updateHandler(comment.id)}>수정</a>
            <a>삭제</a>
          </Button>

          <hr />
        </Comment>
      ))}
    </>
  );
};

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;
  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
