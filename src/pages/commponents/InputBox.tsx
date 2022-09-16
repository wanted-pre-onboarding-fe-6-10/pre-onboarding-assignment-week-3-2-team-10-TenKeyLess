import styled from 'styled-components';
import useInput from '../../hoc/useInput';
import { Comments } from '../../types/types';

const InputBox = () => {
  const [{ profile, author, content, createAt }, onChange, reset] = useInput({
    profile_url: '',
  });

  return (
    <Container>
      <Input type="text" placeholder="profile-img" />
      <Input type="text" placeholder="작성자" />
      <TextArea placeholder="내용" />
      <Input type="text" placeholder="xxxx-xx-xx" />
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
const TextArea = styled.textarea.attrs(props => ({
  placeholer: props.placeholder,
}))`
  resize: none;
`;
