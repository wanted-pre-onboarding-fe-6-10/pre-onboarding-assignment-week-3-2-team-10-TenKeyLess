type PerPage = (
  page: number,
  limit: number
) => { startPage: number; last: number };
export const perPage: PerPage = (page, limit) => {
  let startPage = 0;
  let last = limit;
  if (page === 1) {
    return { startPage, last };
  }
  startPage = (page - 1) * limit;
  last = startPage + limit;
  return { startPage, last };
};
