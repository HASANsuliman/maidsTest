import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userAdapter } from './state';

// 1. Select the entire user feature state
export const selectUserState = createFeatureSelector<UserState>('users');

// 2. Use the adapter's getSelectors() to create selectors for the entity state
const { selectAll, selectEntities, selectIds, selectTotal } = userAdapter.getSelectors(selectUserState);

// 3. Create specific selectors
export const selectAllUsers = selectAll;
export const selectUserEntities = selectEntities;
export const selectUserIds = selectIds;
export const selectUserTotal = selectTotal;

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

export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (entities, selectedUserId) => selectedUserId ? entities[selectedUserId] : null
);
