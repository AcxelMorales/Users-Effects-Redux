import { User } from 'src/app/models/User.model';
import * as users from '../actions';

export interface UsersState {
    users  : User[];
    loaded : boolean;
    loading: boolean;
    error  : any;
}

const initState: UsersState = {
    users  : [],
    loaded : false,
    loading: false,
    error  : null
}

export function usersReducer(state = initState, action: users.actions): UsersState {
    switch (action.type) {
        case users.LOAD_USERS:
            return {
                ...state,
                loading: true,
                error  : null
            };
        case users.LOAD_USERS_FAIL:
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
        case users.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded : true,
                users  : [...action.users]
            };
        default: return state;
    }
}