import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthAction,
  LogginUser,
  LogginUserSuccess,
  AuthActions,
  RedirctToHome
} from './auth.action';
import { mergeMap, mapTo, tap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect()
  validateUserCreds$ = this.actions$.pipe(
    ofType(AuthAction.LoginUser),
    map((action: AuthActions) => {
      return action.payload;
    }),
    switchMap(res => [new LogginUserSuccess(res), new RedirctToHome()])
  );

  @Effect({dispatch: false})
  redirectToHome$ = this.actions$.pipe(
    ofType(AuthAction.RedirctToHome),
    tap(() => this.router.navigate(['/']))
  );
}
