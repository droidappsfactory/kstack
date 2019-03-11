import { AuthState, reducer } from './auth/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: reducer
};
