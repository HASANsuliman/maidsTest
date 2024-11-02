import { createAction, props } from '@ngrx/store';
import { User } from './state';

export const loadUsers = createAction('[User] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[], page: number }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const selectUser = createAction('[User] Select User', props<{ userId: number }>());
export const selectUserSucces = createAction('[User] Load User Success', props<{ users: any }>());
export const selectUserFailure = createAction('[User] Load User Failure', props<{ error: string }>());





