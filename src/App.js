import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsLoading, getUsers, getError } from './store';
import { loadUsers } from './store/users';
import Pagination from './Pagination';
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

const App = ({ users, isLoading, loadUsers, error }) => {
  const loadUserTable = async () => {
    await loadUsers();
  };

  if (error.length) {
    console.log('err');
    return <p>{error}</p>;
  }

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
            onClick={loadUserTable}
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
  error: getError(state),
});

export default connect(mapStateToProps, { loadUsers })(App);

App.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadUsers: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
