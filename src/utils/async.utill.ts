export const reducerUtils = {
  initial: (data: any = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (preveState: any = null) => ({
    data: preveState,
    loading: true,
    error: null,
  }),
  success: (data: any) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error: any) => ({
    data: null,
    loading: false,
    error,
  }),
};
