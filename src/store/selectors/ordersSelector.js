export const ordersSelector = ({ordersReducer : { orders},currentUserReducer : {currentUser}}) => {
    return orders.pendind.filter(order => order.idWholesaler == currentUser._id).concat(...orders.sent)
}

export const ordersPendingSelector = ({ordersReducer : { orders},currentUserReducer : {currentUser}}) => {   
    return orders.pendind.filter(order =>order.idWholesaler == currentUser._id)
}

export const ordersCountSelector = ({ordersReducer : { orders},currentUserReducer : {currentUser}}) => { 
    return orders.sent.concat(...orders.pendind.filter(order => order.idWholesaler == currentUser._id )).length
 }

 export const ordersLastSelector = ({ordersReducer : { orders},currentUserReducer : {currentUser}}) => { 
   return orders.pendind.filter(order => order.idWholesaler == currentUser._id).concat(...orders.sent).slice(0,10)
}