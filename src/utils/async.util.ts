export const reducerUtils = {
  initial: (comments = []) => ({
    loading: false,
    comments,
    error: null,
  }),
  loading: (prevState = []) => ({
    comments: prevState,
    loading: true,
    error: null,
  }),
  success: (comments: Array<Comment>) => ({
    comments,
    loading: false,
    error: null,
  }),
  error: (error: any) => ({
    comments: [],
    loading: false,
    error,
  }),
};
