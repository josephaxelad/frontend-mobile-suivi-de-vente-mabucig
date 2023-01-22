export const UPDATE_ORDERS_COUNTER = "UPDATE_ORDERS_COUNTER"

const initialState = {number : 0}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_ORDERS_COUNTER:
    return { ...state, ...payload }

  default:
    return state
  }
}
