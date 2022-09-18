import { useEffect, useCallback } from "react";
import styled from "styled-components";
import Api from "../api";
import { updatePage } from "../redux/Reducer/PageReducer";
import { useAppDispatch, useAppSelector } from "../redux";
import { Comments, setComments } from "../redux/Reducer/CommentsReducer";
import { Pages } from "../redux/Reducer/PageReducer";

const PageList = () => {
  const pageArray = new Array(undefined);
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(Pages);
  const pageLength = Math.ceil(
    useAppSelector(Comments).length / pageState.limit
  );
  const getData = useCallback(async () => {
    const res = await Api.GetComments();
    dispatch(setComments(res.data));
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [getData]);

  const pageHandler = (page: number) => {
    dispatch(updatePage(page));
  };
  for (let i = 0; i < pageLength; i++) {
    pageArray.push(
      // 임시로 페이지 하나만 설정했습니다.
      <Page
        active={pageState.page === i + 1}
        key={`page-${i + 1}`}
        onClick={() => pageHandler(i + 1)}
      >
        {i + 1}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
};

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<{ active: boolean }>`
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
