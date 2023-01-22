export const cartSelector = ({cartReducer : {cart}}) => { 
    return  cart 
 }

 export const cartPriceSelector = ({cartDataReducer : {cartData}}) => { 
    return cartData.price
 }

 export const cartQtySelector = ({cartDataReducer : {cartData}}) => { 
    return  cartData.qty
 }