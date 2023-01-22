import { UPDATE_PRODUCTS } from '../reducers/productsReducer'

export const updateProductsAction = (products) => {
    return {type : UPDATE_PRODUCTS, payload : products }
}