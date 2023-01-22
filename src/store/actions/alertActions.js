import { CLOSE_ALERT, OPEN_ALERT } from "../reducers/alertReducer"

export const openAlertAction = (type,message) => {
    return { type: OPEN_ALERT, payload: {type : type , message : message} }
}

export const closeAlertAction = () => {
    return { type: CLOSE_ALERT }
}