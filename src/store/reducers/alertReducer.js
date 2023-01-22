export const OPEN_ALERT = "OPEN_ALERT"
export const CLOSE_ALERT = "CLOSE_ALERT"

const initialState = {alerts : []}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case OPEN_ALERT :
    return {alerts : [...state.alerts, { type : payload.type , message : payload.message}]}

  case CLOSE_ALERT :
    return {alerts : state.alerts.filter( (alert,index) => index != state.alerts.length-1)}

  default:
    return state
  }
}

