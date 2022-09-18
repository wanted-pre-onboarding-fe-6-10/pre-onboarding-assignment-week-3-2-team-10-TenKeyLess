import List from './commponents/List';
import InputBox from './commponents/InputBox';
import styled from 'styled-components';
import PageButton from './commponents/PageButton';

const Comments = () => {
  return (
    <Container>
      <List />
      <PageButton />
      <InputBox />
    </Container>
  );
};

export default Comments;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
