import { createReducer, on } from '@ngrx/store';
import * as UserActions from './action';
import { initialState, userAdapter } from './state';

export const userReducer = createReducer(
  initialState,
  // Load Users
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),

  // Load Users Success
  on(UserActions.loadUsersSuccess, (state, { users, totalPage, page }) =>
    userAdapter.setAll(users, {
      ...state,
      loading: false,
      page,
      totalPage,
    })
  ),

  // Load Users Failure
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Select User
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
    loading: true,
  })),

  // Load User Success
  on(UserActions.selectUserSucces, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),

  // Select User Failure
  on(UserActions.selectUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
