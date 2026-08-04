import { RootState } from "../../root-reducer";

export const selectProductsTotalPrice = (state: RootState) => {
    return state.cartReducer.products.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.price * currentProduct.quantity;
    }, 0);
};

export const selectProductsCount = (state: RootState) => {
    return state.cartReducer.products.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.quantity;
    }, 0);
} 
