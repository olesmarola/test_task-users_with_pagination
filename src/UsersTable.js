import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import { HEADERS } from './constants';

const UsersTable = ({ users }) => {
  return (
    <table className="users">
      <thead>
        <tr>
          {HEADERS.map(header => (
            <th key={header.code}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
