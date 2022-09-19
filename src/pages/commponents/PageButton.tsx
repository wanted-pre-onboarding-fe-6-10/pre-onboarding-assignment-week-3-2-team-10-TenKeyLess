import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCommentApi } from '../../api/api';
import { getComment, movePage, pagination } from '../../redux/modules/comment';
import { rootReducer } from '../../redux/store';

const PageButton = () => {
  const comment = useSelector((store: ReturnType<typeof rootReducer>) => {
    return store.comment;
  });

  const pages = comment.pages;
  const page = comment.page;

  const dispatch = useDispatch();

  const getPages = async () => {
    const response = await getCommentApi();
    dispatch(pagination(response));
  };

  useEffect(() => {
    getPages();
  }, []);

  const movePageNumber = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    dispatch(movePage(value));
    dispatch(getComment(await getCommentApi(page, '5')));
  };

  return (
    <Container>
      {pages.map(page => {
        return (
          <Button value={page} key={page} onClick={movePageNumber}>
            {page}
          </Button>
        );
      })}
    </Container>
  );
};

export default PageButton;

const Container = styled.div``;
const Button = styled.button`
  height: 30px;
  margin: 0.5rem;
`;
