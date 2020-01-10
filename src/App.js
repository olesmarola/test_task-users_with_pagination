import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsLoading, getUsers } from './store';
import { setUsers } from './store/users';
import { setIsLoading } from './store/isLoading';
import { loadUsersFromServer } from './api';
import Pagination from './Pagination';
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

const App = ({ users, isLoading, setUsers, setIsLoading }) => {
  const loadUsers = async () => {
    setIsLoading(true);

    const usersFromServer = await loadUsersFromServer();

    setUsers(usersFromServer);
    setIsLoading(false);
  };

  return (
    <div className="container">
      {users.length > 0 ? (
        <Pagination tableData={users} withInfo />
      ) : (
        <div className="post__start">
          <button
            disabled={isLoading}
            className="waves-effect waves-light btn-large button__load"
            type="button"
            onClick={loadUsers}
          >
            {isLoading ? 'Loading...' : 'Load Users'}
            <i className="material-icons right">cloud</i>
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: getUsers(state),
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps, { setUsers, setIsLoading })(App);

App.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setUsers: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
