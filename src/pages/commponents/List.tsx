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
    const response = await getCommentApi(page);
    dispatch(getComment(response));
  };

  const removeComment = async (id: number) => {
    await deleteCommentApi(id);
    dispatch(deleteComment(id));
    dispatch(movePage('1'));
    getList();
  };

  const movePageNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    dispatch(movePage(value));
  };

  const handleEdit = (input: Comments) => {
    dispatch(postComment(input));
    dispatch(editMode(!mode));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      {list.map((comment: Comments) => {
        return (
          <CommentBox key={comment.id}>
            <ProfileWrapper>
              <Profile src={comment.profile_url} />
              <Author>{comment.author}</Author>
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
      <Button value="2" onClick={movePageNumber}>
        다음 페이지
      </Button>
    </Container>
  );
};

export default List;

const Container = styled.ul``;
const CommentBox = styled.li`
  display: flex;
  flex-direction: column;
`;
const ProfileWrapper = styled.div``;
const Profile = styled.img``;
const Author = styled.span``;
const Content = styled.p``;
const ButtonWrapper = styled.div``;
const Button = styled.button``;
