import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentApi, getCommentApi } from '../../api/api';
import {
  deleteComment,
  editMode,
  getComment,
  movePage,
  postComment,
} from '../../redux/modules/comment';
import { rootReducer } from '../../redux/store';
import { Comments } from '../../types/types';
import styled from 'styled-components';

const List = () => {
  // get List
  const comment = useSelector((store: ReturnType<typeof rootReducer>) => {
    return store.comment;
  });

  const list = comment.commentList;
  const page = comment.page;
  const mode = comment.editMode;

  const dispatch = useDispatch();

  const getList = async () => {
    const response = await getCommentApi(page, '5');
    dispatch(getComment(response));
  };

  const removeComment = async (id: number) => {
    await deleteCommentApi(id);
    dispatch(deleteComment(id));
    dispatch(movePage('1'));
    getList();
  };

  const handleEdit = (input: Comments) => {
    dispatch(postComment(input));
    dispatch(editMode(!mode));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {list.map((comment: Comments) => {
        return (
          <CommentBox key={comment.id}>
            <ProfileWrapper>
              <Profile>
                <Img src={comment.profile_url} />
                <Text>작성자: {comment.author}</Text>
              </Profile>
              <Text>작성일: {comment.createdAt}</Text>
            </ProfileWrapper>
            <Content>{comment.content}</Content>
            <ButtonWrapper>
              <Button
                onClick={() => {
                  handleEdit({ ...comment });
                }}
              >
                수정
              </Button>
              <Button
                onClick={() => {
                  removeComment(comment.id);
                }}
              >
                삭제
              </Button>
            </ButtonWrapper>
          </CommentBox>
        );
      })}
    </>
  );
};

export default List;

const CommentBox = styled.li`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-bottom: 1px solid #9e9e9e;
  padding: 1rem;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
`;
const Text = styled.span``;
const Content = styled.p``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  margin-left: 1rem;
`;
