
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './action';
import { initialState } from './state';



export const userReducer = createReducer(
  initialState,

  // Load Users
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Load Users Success
  on(UserActions.loadUsersSuccess, (state, { users, page }) => ({
    ...state,
    loading: false,
    users: users,
  })),

  // Load Users Failure
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

  // Select User
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    loading: true,
    selectedUserId: userId,
  })),

  on(UserActions.selectUserSucces, (state, { user }) => ({
    ...state,
    loading: false,
    user: user,
  })),

  // Load Users Failure
  on(UserActions.selectUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
