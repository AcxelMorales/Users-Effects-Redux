import * as reducers from './store/reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: reducers.UsersState;
    user : reducers.UserState;
};

export const APP_REDUCERS: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    user : reducers.userReducer
}
