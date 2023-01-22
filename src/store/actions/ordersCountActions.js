import { UPDATE_ORDERS_COUNTER } from "../reducers/ordersCountReducer"

export const updateOrdersCounterAction = (number) => {
    return { type: UPDATE_ORDERS_COUNTER, payload: { number : number} }
}