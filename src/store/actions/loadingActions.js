import { IS_LOADING } from "../reducers/loadingReducer"

export const isLoadingAction = (isLoading) => {
    return { type: IS_LOADING, payload: {isLoading : isLoading} }
}
