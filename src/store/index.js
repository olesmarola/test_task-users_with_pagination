import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import isLoadingReducer from './isLoading';
import paginationReducer from './pagination';

export const getUsers = state => state.users;
export const getIsLoading = state => state.isLoading;
export const getCurrentPage = state => state.currentPage;

const store = createStore(
  combineReducers({
    users: usersReducer,
    isLoading: isLoadingReducer,
    currentPage: paginationReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
