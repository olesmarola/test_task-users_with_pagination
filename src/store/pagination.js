const SET_CURRENT_PAGE = 'setCurrentPage';

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

const paginationReducer = (currentPage = 1, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.currentPage;
    default:
      return currentPage;
  }
};

export default paginationReducer;
