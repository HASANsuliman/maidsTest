import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UserState extends EntityState<User> {
  loading: boolean;
  selectedUserId: number | null;
  currentPage: number;
}

export const userAdapter = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState({
  loading: false,
  selectedUserId: null,
  currentPage: 1
});
