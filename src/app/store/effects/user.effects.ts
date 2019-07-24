import { Injectable } from '@angular/core';

import { Effect, ofType, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as user from '../actions/index';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private _userService: UserService
    ) { }

    @Effect()
    loadUser = this.actions$
        .pipe(
            ofType(user.LOAD_USER)
        )
        .pipe(
            switchMap((action: user.LoadUser) => this._userService.getUser(action.id)
                .pipe(
                    map(userMap => new user.LoadUserSucces(userMap)),
                    catchError(err => of(new user.LoadUserFail(err)))
                )
            )
        );
}