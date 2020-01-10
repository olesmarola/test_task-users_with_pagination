import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.desc}</td>
  </tr>
);

export default User;

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
};
