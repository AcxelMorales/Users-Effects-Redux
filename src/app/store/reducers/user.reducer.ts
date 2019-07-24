import { User } from 'src/app/models/User.model';
import * as user from '../actions';

export interface UserState {
    user   : User;
    loaded : boolean;
    loading: boolean;
    error  : any;
}

const initState: UserState = {
    user   : null,
    loaded : false,
    loading: false,
    error  : null
}

export function userReducer(state = initState, action: user.userActions): UserState {
    switch (action.type) {
        case user.LOAD_USER:
            return {
                ...state,
                loading: true,
                error  : null
            };
        case user.LOAD_USER_FAIL:
            return {
                ...state,
                loaded : false,
                loading: false,
                error  : {
                    status : action.payload.status,
                    message: action.payload.message,
                    url    : action.payload.url
                }
            };
        case user.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded : true,
                user   : {...action.user}
            };
        default: return state;
    }
}