export const UPDATE_SEMIWHOLESALER_SELECTED = "UPDATE_SEMIWHOLESALER_SELECTED"

const initialState = {semiWholesalerSelected : null}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_SEMIWHOLESALER_SELECTED:
    return { ...payload }

  default:
    return state
  }
}
