import { createReducer, on } from '@ngrx/store';
import { userAdapter, initialState } from './state';
import * as UserActions from './action';

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users, page }) =>
    userAdapter.setAll(users, { ...state, loading: false, currentPage: page })
  ),
  on(UserActions.loadUsersFailure, (state) => ({ ...state, loading: false })),
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  }))
);
