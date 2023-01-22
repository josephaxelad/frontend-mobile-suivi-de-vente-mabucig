export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGOUT = "LOGOUT"

const initialState =  { isAuth : {
    isLoading : false,
    error : false,
    value : null
}  }

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_START :
            return {isAuth : {
                isLoading : true,
                error : false,
                value : false
            }}
        case LOGIN_SUCCESS :
            return {isAuth : {
                isLoading : false,
                error : false,
                value : true
            }}
        case LOGIN_FAILED :
            return {isAuth : {
                isLoading : false,
                error : payload.error,
                value : false
            }}
        case LOGOUT :
            return {isAuth : {
                isLoading : false,
                error : false,
                value : false
            }}
        default:
        return state
    }
    
}
