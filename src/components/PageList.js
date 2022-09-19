import { useDispatch, useSelector } from 'react-redux';
import { changePage } from 'reducers/comment.reducer';
import styled from 'styled-components';
import { PER_PAGE } from 'utils/constants';

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

function PageList() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.commentReducer.comments);
  const focus = useSelector(state => state.commentReducer.focusPage);

  const pageArray = [];

  const handlePageClick = i => {
    dispatch(changePage(i));
  };

  for (let i = 1; i <= Math.ceil(data.length / PER_PAGE); i++)
    pageArray.push(
      <Page key={i} active={i === focus} onClick={() => handlePageClick(i)}>
        {i}
      </Page>
    );

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
