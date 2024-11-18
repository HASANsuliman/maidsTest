
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../Models/User';

// Define the entity state
export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  error: any;
  page: number;
  totalPage: number;
}

// Create an entity adapter
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user) => user.id, // Define the unique identifier for users
});

// Initial state
export const initialState: UserState = userAdapter.getInitialState({
  selectedUserId: null,
  loading: false,
  error: null,
  page: 1,
  totalPage: 0,
});
