import { SCAN_FAILED, SCAN_START, UPDATE_PRODUCT_SCANNED } from "../reducers/scannedProductReducer"

export const scanStartAction = () => {
    return {type : SCAN_START}
}
export const updateScannedProductAction = (scannedProduct) => {
    return {type : UPDATE_PRODUCT_SCANNED, payload : scannedProduct}
}
export const scanFailedAction = (error) => {
    return {type : SCAN_FAILED,payload : error}
}