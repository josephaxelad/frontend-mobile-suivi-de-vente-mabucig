export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER"

const initialState = {currentUser : null}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case UPDATE_CURRENT_USER:
    return { ...payload }

  default:
    return state
  }
}
