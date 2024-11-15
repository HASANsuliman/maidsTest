
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './state';
export const selectUserState = createFeatureSelector<UserState>('user');

// Selectors
export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectpage = createSelector(
  selectUserState,
  (state) => state.page
);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state) => state.user
);
export const totalPage = createSelector(
  selectUserState,
  (state) => state.totalPage
);
