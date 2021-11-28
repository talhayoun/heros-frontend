import { LOGIN, LOGOUT } from "../actions/userActions";
import { removeCookie } from "../server/cookies";

export const initialUserState = {
    token: null,
    id: null,
    username: ""
};

const userReducer = (userState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...userState, token: action.token, id: action.id, username: action.username };
        case LOGOUT:
            removeCookie();
            return { token: null, id: null, username: null };
        default:
            return { ...userState };
    }
}

export default userReducer;