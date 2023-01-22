export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS"

const initialState = { products : []}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_PRODUCTS:
    return {products : [ ...payload] }

  default:
    return state
  }
}
