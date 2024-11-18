
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './state';

// Feature selector
export const selectUserState = createFeatureSelector<UserState>('user');

// Entity adapter selectors
const { selectAll, selectEntities, selectIds, selectTotal } = userAdapter.getSelectors(selectUserState);

// Custom selectors
export const selectAllUsers = selectAll; // All users
export const selectUserEntities = selectEntities; // User dictionary
export const selectUserIds = selectIds; // User IDs
export const selectUserTotal = selectTotal; // Total user count

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectPage = createSelector(
  selectUserState,
  (state) => state.page
);

export const selectTotalPage = createSelector(
  selectUserState,
  (state) => state.totalPage
);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId
);

export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (entities, selectedUserId) => (selectedUserId ? entities[selectedUserId] : null)
);
