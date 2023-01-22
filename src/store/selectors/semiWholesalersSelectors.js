export const semiWholesalersSelector = ({semiWholesalersReducer : {semiWholesalers}}) => { 
    return semiWholesalers
 }

 export const semiWholesalersCountSelector = ({semiWholesalersReducer : {semiWholesalers}}) => { 
    return semiWholesalers.length
 }

 export const semiWholesalersLastSelector = ({semiWholesalersReducer : {semiWholesalers}}) => { 
   return semiWholesalers.slice(-10).reverse()
}
