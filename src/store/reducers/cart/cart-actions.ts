import Product from "../../../types/products.type";
import CartActionTypes from "./cart-actions.types";

export const toggleCart = () => ({
    type: CartActionTypes.toggleCart,
});

export const addProductToCart = (payload: Product) => ({
    type: CartActionTypes.addProductToCart,
    payload,
});

export default toggleCart;
