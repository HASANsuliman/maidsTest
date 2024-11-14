
import { createAction, props } from '@ngrx/store';
import { User } from '../Models/User'; 

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[], page: number }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const selectUser = createAction(
  '[User] Select User',
  props<{ userId: number}>()
);
 export const selectUserSucces = createAction('[User] Load User Success', props<{ user: any }>());
 export const selectUserFailure = createAction('[User] Load User Failure', props<{ error: string }>());



