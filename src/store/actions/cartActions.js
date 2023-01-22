import { ADD_PRODUCT_TO_CART, DECREMENT_CART_ITEM_QTY, DELETE_PRODUCT_FROM_CART, INCREMENT_CART_ITEM_QTY, REMOVE_CART, UPDATE_CART_DATA } from "../reducers/cartReducer"
import { openAlertAction } from "./alertActions"
import { isLoadingAction } from ".//loadingActions"

export const addProductToCartAction = (product,qty) => (dispatch,getState) =>{
    // console.log(getState().cartReducer.cart)
    dispatch({ type: ADD_PRODUCT_TO_CART , payload: {product : product , qty : qty} })
    dispatch(updateCartDataAction(getState().cartReducer.cart))
    dispatch(openAlertAction("success","Le carton a été ajouté à la commande avec succès!"))
    // return { type: ADD_PRODUCT_TO_CART , payload: {product : product , qty : qty} }
}
export const deleteProductFromCartAction = (product) => (dispatch,getState) =>{
    dispatch({ type: DELETE_PRODUCT_FROM_CART, payload: {product : product} })
    dispatch(updateCartDataAction(getState().cartReducer.cart)) 
}
export const decrementCartItemQtyAction = (product) => (dispatch,getState) =>{
    dispatch({ type: DECREMENT_CART_ITEM_QTY, payload: {product : product } })
    dispatch(updateCartDataAction(getState().cartReducer.cart))
}
export const incrementCartItemQtyAction = (product) => (dispatch,getState) =>{
    dispatch({ type: INCREMENT_CART_ITEM_QTY, payload: {product : product} })
    dispatch(updateCartDataAction(getState().cartReducer.cart))
}
export const updateCartDataAction = (cart) => {
    return { type: UPDATE_CART_DATA, payload: {cart : cart} }
}

export const removeCartAction = () => (dispatch) => {
    dispatch({ type: REMOVE_CART })
    dispatch(updateCartDataAction([]))
}