const SET_USERS = 'setUsers';

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return users;
  }
};

export default usersReducer;
