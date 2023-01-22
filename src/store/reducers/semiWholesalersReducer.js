export const UPDATE_SEMIWHOLESALERS = "UPDATE_SEMIWHOLESALERS"

const initialState = { semiWholesalers : []}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_SEMIWHOLESALERS:
    return { semiWholesalers : [...payload] }

  default:
    return state
  }
}
