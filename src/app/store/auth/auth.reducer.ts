import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";
import { AuthActions, AuthAction } from "./auth.action";

export interface AuthState {
  userName: string;
  isLoggedIn: boolean;
}

const initAuth: AuthState = {
  userName: "ensaimr",
  isLoggedIn: false
};
// start working on Memoized
const getAuthFeatureState: MemoizedSelector<
  object,
  AuthState
> = createFeatureSelector<AuthState>("auth");

export const getLoggedIn = createSelector(
  getAuthFeatureState,
  state => state.isLoggedIn
);

export const getLoggedInUser = createSelector(
  getAuthFeatureState,
  state => state.userName
);

export function reducer(
  state: AuthState = initAuth,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthAction.LoginUserSuccess:
    console.log('fasdf',action)
      return {
        ...state,
        isLoggedIn: action.payload.loggedIn,
        userName: action.payload.username
      };

    default:
      return state;
  }
}
