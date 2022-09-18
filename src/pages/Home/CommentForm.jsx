import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { postComment, putComment, setCommentItem } from '@/store/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';

const CommentForm = () => {
  const dispatch = useDispatch();
  const [commentValue, setCommentValue] = useState({
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  });

  const { commentItem } = useSelector(state => state.comments);

  useEffect(() => {
    if (commentItem.id) {
      setCommentValue(commentItem);
    }
  }, [commentItem]);

  const onChange = e => {
    const { name, value } = e.target;

    setCommentValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  const onClickBtn = buttonType => {
    // 1. 등록 or 취소 , 2. 등록이면 - POST or PUT
    // 등록 버튼 누를시 - post인지 put인지 구별해야함.
    // <put>
    if (commentItem.id && buttonType === 'add') {
      dispatch(putComment({ id: commentValue.id, commentValue }));
    }

    // <post>
    if (!commentItem.id && buttonType === 'add') {
      dispatch(postComment(commentValue));
    }

    // 취소버튼 누를시는 이거만 됨.
    setCommentValue({ profile_url: '', author: '', content: '', createdAt: '' });
    dispatch(setCommentItem(0));
  };

  return (
    <FormEl>
      {formSet.map((setData, idx) => {
        if (setData.type === 'textarea') {
          return (
            <TextareaEl
              key={idx}
              placeholder="내용"
              name="content"
              value={commentValue.content}
              onChange={e => onChange(e)}
            />
          );
        }
        return (
          <InputEl
            key={idx}
            type={setData.type}
            placeholder={setData.placeholder}
            name={setData.name}
            value={commentValue[setData.name]}
            onChange={e => onChange(e)}
          />
        );
      })}
      <button type="button" onClick={() => onClickBtn('add')}>
        등록
      </button>
      <button type="button" onClick={() => onClickBtn('cancel')}>
        취소
      </button>
    </FormEl>
  );
};

export default CommentForm;

const formSet = [
  { type: 'text', placeholder: 'https://picsum.photos/id/1/50/50', name: 'profile_url' },
  { type: 'text', placeholder: '작성자', name: 'author' },
  { type: 'textarea', placeholder: '내용', name: 'content' },
  { type: 'date', placeholder: 'date', name: 'createdAt' },
];

const FormEl = styled.form`
  margin: 1rem 0;
`;

const InputEl = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 4px;
`;

const TextareaEl = styled.textarea`
  width: 100%;
  resize: vertical;
`;
