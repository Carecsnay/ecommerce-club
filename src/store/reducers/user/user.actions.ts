import User from "../../../types/user.type";
import UserActionTypes from "./user-actions.types";

export const loginUser = (payload: User) => ({
    type: UserActionTypes.LOGIN,
    payload,
});

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
});
