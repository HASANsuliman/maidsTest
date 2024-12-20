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
          map(response => UserActions.loadUsersSuccess({ users: response.data, page: response.page,totalPage:response.total_pages })),
          catchError(error => of(UserActions.loadUsersFailure({ error: error.message })))
        )
      )
    )
  );
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.selectUser),
      mergeMap(action =>
        this.userService.getUserDetail(action.userId).pipe(
          map(response => UserActions.selectUserSucces({ user: response.data})),
          catchError(error => of(UserActions.selectUserFailure({ error: error.message })))
        )
      )
    )
  );
}
