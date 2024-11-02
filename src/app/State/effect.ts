import { UserService } from './../Services/User/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(action =>
        this.userService.getUsers(action.page).pipe(
          map(response => UserActions.loadUsersSuccess({ users: response.data, page: action.page })),
          catchError(error => of(UserActions.loadUsersFailure({ error: error.message })))
        )
      )
    )
  );
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.selectUser),
      mergeMap(action =>
        this.userService.getUsers(action.userId).pipe(
          map(response => UserActions.selectUserSucces({ users: response.data})),
          catchError(error => of(UserActions.selectUserFailure({ error: error.message })))
        )
      )
    )
  );
}
