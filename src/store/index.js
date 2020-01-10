import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import isLoadingReducer from './isLoading';
import paginationReducer from './pagination';
import errorReducer from './error';

export const getUsers = state => state.users;
export const getIsLoading = state => state.isLoading;
export const getCurrentPage = state => state.currentPage;
export const getError = state => state.error;

const store = createStore(
  combineReducers({
    users: usersReducer,
    isLoading: isLoadingReducer,
    currentPage: paginationReducer,
    error: errorReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
