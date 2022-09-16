import { useCallback, useState } from 'react';
import React from 'react';
import { Comments } from '../types/types';

const useInput = (initial: Comments) => {
  const [form, setForm] = useState(initial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm(form => ({ ...form, [name]: value }));
  };

  const reset = () => setForm(initial);

  return [form, onchange, reset];
};

export default useInput;
