import { UPDATE_SEMIWHOLESALERS } from "../reducers/semiWholesalersReducer"

export const updateSemiWholesalersAction = (semiWholesalers) => {
    return { type: UPDATE_SEMIWHOLESALERS, payload: semiWholesalers }
}
