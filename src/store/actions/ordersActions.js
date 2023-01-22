import { ADD_PENDING_ORDER, UPDATE_ORDERS } from "../reducers/ordersReducer"

export const updateOrdersAction = (orders) =>  {
    return { type: UPDATE_ORDERS, payload: { orders : orders} }
}
export const addPendingOrderAction = (order) => async (dispatch) => {
    dispatch({ type: ADD_PENDING_ORDER, payload: { order : order} })
}
