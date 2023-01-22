import { UPDATE_SEMIWHOLESALER_SELECTED } from "../reducers/semiWholesalerSelectedReducer"

export const updateSemiWholesalerSelectedAction = (semiWholesalerSelected) => { 
    return { type: UPDATE_SEMIWHOLESALER_SELECTED, payload: { semiWholesalerSelected : semiWholesalerSelected} }
 }