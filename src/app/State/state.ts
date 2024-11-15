import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../Models/User';



export interface UserState {
  users: User[]; // Array of users
  user: User | null;
  loading: boolean; // Loading state
  error: any; // Error state
  selectedUserId: number | null; // Currently selected user ID
  page: number; 
  totalPage:number
}

export const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
  selectedUserId: null,
  page: 1,
  totalPage:0

};