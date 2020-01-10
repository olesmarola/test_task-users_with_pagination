const SET_ERROR = 'setError';

export const setError = error => ({
  type: SET_ERROR,
  error,
});

const errorReducer = (error = '', action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    default:
      return error;
  }
};

export default errorReducer;
