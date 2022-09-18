import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentApi, getCommentApi } from '../../api/api';
import { deleteComment, getComment } from '../../redux/modules/comment';
import { rootReducer } from '../../redux/store';
import { Comments } from '../../types/types';
import styled from 'styled-components';

const List = () => {
  // get List
  const list = useSelector((store: ReturnType<typeof rootReducer>) => {
    return store.comment.commentList;
  });

  const dispatch = useDispatch();

  const getList = async () => {
    const response = await getCommentApi();
    dispatch(getComment(response));
  };

  const removeComment = async (id: number) => {
    const response = await deleteCommentApi(id);
    dispatch(deleteComment(id));
  };

  useEffect(() => {
    getList();
  }, [list]);

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
              <Button>수정</Button>
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
