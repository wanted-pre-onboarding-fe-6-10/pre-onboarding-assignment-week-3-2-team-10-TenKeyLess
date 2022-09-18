import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { movePage } from '../../redux/modules/comment';

const PageButton = () => {
  const dispatch = useDispatch();

  const movePageNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    dispatch(movePage(value));
  };
  return (
    <Button value="2" onClick={movePageNumber}>
      다음 페이지
    </Button>
  );
};

export default PageButton;

const Button = styled.button`
  height: 30px;
  margin: 2rem;
`;
