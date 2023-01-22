export const SCAN_START = "SCAN_START"
export const SCAN_SUCCESS = "SCAN_SUCCESS"
export const SCAN_FAILED = "SCAN_FAILED"
export const UPDATE_PRODUCT_SCANNED = "UPDATE_PRODUCT_SCANNED"

const initialState = {scannedProduct : { value : null,isLoading : false,error : false}}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SCAN_START:
    return { scannedProduct : { value : null,isLoading : true,error : false} }
  case UPDATE_PRODUCT_SCANNED:
    return { scannedProduct : { value : payload,isLoading : false,error : false} }
  case SCAN_FAILED:
    return { scannedProduct : { value : null,isLoading : false,error : payload} }

  default:
    return state
  }
}
