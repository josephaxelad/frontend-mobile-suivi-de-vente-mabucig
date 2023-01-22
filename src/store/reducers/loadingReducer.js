export const IS_LOADING = "IS_LOADING"

const initialState =  { isLoading : false  }

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case IS_LOADING :
            return {isLoading : payload.isLoading}
        default:
        return state
    }
    
}
