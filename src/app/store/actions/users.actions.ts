import { Action } from '@ngrx/store';

import { User } from 'src/app/models/User.model';

export const LOAD_USERS = '[Users] load users';
export const LOAD_USERS_FAIL = '[Users] load users fail';
export const LOAD_USERS_SUCCESS = '[Users] load users success';

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;

    constructor(public payload: any) { }
}

export class LoadUsersSucces implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor(public users: User[]) { }
}

export type actions = LoadUsers | LoadUsersFail | LoadUsersSucces;
