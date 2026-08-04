import Product from "../../../types/products.type";
import CartActionTypes from "./cart-actions.types";

export const toggleCart = () => ({
    type: CartActionTypes.toggleCart,
});

export const addProductToCart = (payload: Product) => ({
    type: CartActionTypes.addProductToCart,
    payload,
});

export const remProductFromCart = (payload: string) => ({
    type: CartActionTypes.remProductFromCart,
    payload,
});

export const incCartProductQuantity = (payload: string) => ({
    type: CartActionTypes.incCartProductQuantity,
    payload,
});

export const decCartProductQuantity = (payload: string) => ({
    type: CartActionTypes.decCartProductQuantity,
    payload,
});

export const clearCartProducts = () => ({
    type: CartActionTypes.clearCartProducts,
});

export default toggleCart;
