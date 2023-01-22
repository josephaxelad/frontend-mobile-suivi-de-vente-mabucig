export const UPDATE_ORDERS = "UPDATE_ORDERS"
export const ADD_PENDING_ORDER = "ADD_PENDING_ORDER"

const initialState = { orders : {
                                sent : [],
                                pendind : []}}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_ORDERS:
    const ordersSent = payload.orders
    return { orders : {
        sent : [...payload.orders],
        pendind : [...state.orders.pendind.filter(orderPending => {
            let value = true
            ordersSent.forEach(orderSent => {
                if (Date.parse(orderPending.date) == Date.parse(orderSent.date)) {
                    value = false
                }
            });
            return value
        })]
    }} 

  case ADD_PENDING_ORDER:
    return { orders : {
        sent : [...state.orders.sent],
        pendind : [...state.orders.pendind,payload.order]} }

  default:
    return state
  }
}
