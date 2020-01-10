import { loadUsersFromServer } from '../api';
import { setIsLoading } from './isLoading';

const SET_USERS = 'setUsers';

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const loadUsers = () => {
  return async dispatch => {
    dispatch(setIsLoading(true));

    const usersFromServer = await loadUsersFromServer();

    dispatch(setUsers(usersFromServer));
    dispatch(setIsLoading(false));
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
