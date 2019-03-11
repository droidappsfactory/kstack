import { Action } from '@ngrx/store';

export enum AuthAction {
  LoginUser = '[Auth] Login User',
  LoginUserSuccess = '[Auth] Login User Success',
  RedirctToHome = '[Auth] Redirct To Home'
}

export class LogginUser implements Action {
  readonly type = AuthAction.LoginUser;

  constructor(public payload: any) {}
}

export class LogginUserSuccess implements Action {
  readonly type = AuthAction.LoginUserSuccess;

  constructor(public payload: any) {}
}

export class RedirctToHome implements Action {
  readonly type = AuthAction.RedirctToHome;

  constructor() {}
}

export type AuthActions = LogginUser | LogginUserSuccess;
