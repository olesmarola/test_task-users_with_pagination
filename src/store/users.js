import { loadUsersFromServer } from '../api';
import { setIsLoading } from './isLoading';
import { setError } from './error';

const SET_USERS = 'setUsers';

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const loadUsers = () => {
  return async dispatch => {
    try {
      dispatch(setIsLoading(true));

      const usersFromServer = await loadUsersFromServer();

      dispatch(setUsers(usersFromServer));
      dispatch(setIsLoading(false));
    } catch (e) {
      const errorMessage = e.message + '. Reload page and try again, please!';

      dispatch(setIsLoading(false));
      dispatch(setError(errorMessage));
    }
  };
};

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return users;
  }
};

export default usersReducer;
