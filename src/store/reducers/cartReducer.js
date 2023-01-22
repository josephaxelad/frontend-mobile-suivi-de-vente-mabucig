export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART"
export const DECREMENT_CART_ITEM_QTY = "DECREMENT_CART_ITEM_QTY"
export const INCREMENT_CART_ITEM_QTY = "INCREMENT_CART_ITEM_QTY"
export const UPDATE_CART_DATA = "UPDATE_CART_DATA"
export const REMOVE_CART = "REMOVE_CART"

const initialState = { cart : []}//{product : {},qty : 1, totalPrice :0}
const initialStateCartData = { cartData : {qty : 0, price : 0}}//{qty : 1, price :0}
            

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_PRODUCT_TO_CART:
    const cartItemAdded = state.cart.find( cartItem => cartItem.product._id == payload.product._id)
    if (cartItemAdded) {
        return {cart : state.cart.map(cartItem => {
            if (cartItem.product._id == payload.product._id) {
                return {
                    product : payload.product,
                    qty : cartItem.qty+payload.qty,
                    totalPrice :payload.product.price*(cartItem.qty+payload.qty)}
            } else {
                return cartItem
            }
        })}
    } else {
        return { cart : [...state.cart,{
                            product : payload.product,
                            qty : payload.qty,
                            totalPrice : payload.product.price*payload.qty
                        }
                   ] }
    }
    
  case DELETE_PRODUCT_FROM_CART:
    const newCart = state.cart.filter(cartItem => cartItem.product._id != payload.product._id )
    return { cart : [...newCart]}

  case DECREMENT_CART_ITEM_QTY :
        return {cart : state.cart.map(cartItem =>{
            if (cartItem.product._id == payload.product._id) {
                return {
                    product : payload.product,
                    qty : cartItem.qty-1,
                    totalPrice :payload.product.price*(cartItem.qty-1)}
            } else {
                return cartItem
            }
        })
    }

  case INCREMENT_CART_ITEM_QTY :
    return {cart : state.cart.map(cartItem =>{
        if (cartItem.product._id == payload.product._id) {
            return {
                product : payload.product,
                qty : cartItem.qty+1,
                totalPrice :payload.product.price*(cartItem.qty+1)}
        } else {
            return cartItem
        }
    }) }

  case REMOVE_CART : 
    return { cart : []}


  default:
    return state
  }
}


export const cartDataReducer = (state = initialStateCartData, { type, payload }) => {
    switch (type) {

  case UPDATE_CART_DATA :
    const newCart = payload.cart
    let qty = 0
    let price = 0
    if (newCart) {
        newCart.forEach(cartItem => {
            qty += cartItem.qty
            price += cartItem.product.price*cartItem.qty
        });
    }
     return{cartData : {
        qty : qty,
        price : price
     }} 

  default:
    return state
  }
}