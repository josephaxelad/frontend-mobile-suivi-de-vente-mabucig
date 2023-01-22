import { UPDATE_CURRENT_USER } from "../reducers/currentUserReducer"

export const updateCurrentUserAction = (currentUser) => { 
    return { type: UPDATE_CURRENT_USER, payload: { currentUser : currentUser} }
 }