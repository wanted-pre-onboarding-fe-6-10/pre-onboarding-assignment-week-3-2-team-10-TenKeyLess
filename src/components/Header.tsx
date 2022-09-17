import styled from 'styled-components';

const Header = () => {
  return (
    <HeadWrapper>
      <p>Angular</p>
      <span>/</span>
      <p>Angular-cli</p>
    </HeadWrapper>
  );
};

export default Header;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  font-size: 1.5rem;
  background-color: lightgray;

  span {
    margin: 2rem;
  }
`;
