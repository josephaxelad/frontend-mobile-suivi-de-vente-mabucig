import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from "../reducers/authReducer"

export const loginStartAction = () => { 
    return { type : LOGIN_START }
 }

 export const loginSuccessAction = () => { 
    return { type : LOGIN_SUCCESS }
 }

 export const loginFailedAction = (error) => { 
    return { type : LOGIN_FAILED , payload : {error : error}}
 }

 export const logoutAction = () => { 
    return { type : LOGOUT }
 }