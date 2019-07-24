import { Injectable } from '@angular/core';

import { Effect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as users from '../actions/index';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private _userService: UserService
    ) { }

    @Effect()
    loadUsers = this.actions$
        .pipe(
            ofType(users.LOAD_USERS)
        )
        .pipe(
            switchMap(() => this._userService.getUsers()
                .pipe(
                    map(usersMap => new users.LoadUsersSucces(usersMap)),
                    catchError(err => of(new users.LoadUsersFail(err)))
                )
            )
        );
}