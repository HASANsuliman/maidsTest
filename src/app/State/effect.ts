import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../Services/User/user.service';
import * as UserActions from './action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect( () => {
      return this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap((action) => {
          return this.userService.getUsers(action.page).pipe(
            map((data) => {
              console.log(data);
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
