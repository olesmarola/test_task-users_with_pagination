const USERS_URL =
  'https://my-json-server.typicode.com/olesmarola/usersApi/users';

export const loadUsersFromServer = async () => {
  const response = await fetch(USERS_URL);

  return response.json();
};
