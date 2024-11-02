import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userAdapter } from './state';

export const selectUserState = createFeatureSelector<UserState>('users');

const { selectAll, selectIds} = userAdapter.getSelectors(selectUserState);

export const selectAllUsers = selectAll;
export const selectUserIds = selectIds;


export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);
export const selectCurrentPage = createSelector(
  selectUserState,
  (state) => state.currentPage
);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId

);
