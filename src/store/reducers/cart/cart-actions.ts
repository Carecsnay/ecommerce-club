import Product from "../../../types/products.type";
import CartActionTypes from "./cart-actions.types";

interface toggleCartAction {
    type: typeof CartActionTypes.toggleCart;
    [key: string]: any;
}

export const toggleCart = (): toggleCartAction => ({
    type: CartActionTypes.toggleCart,
});

interface addProductToCartAction {
    type: typeof CartActionTypes.addProductToCart;
    payload: Product;
    [key: string]: any;
}

export const addProductToCart = (payload: Product): addProductToCartAction => ({
    type: CartActionTypes.addProductToCart,
    payload,
});

interface remProductFromCartAction {
    type: typeof CartActionTypes.remProductFromCart;
    payload: string;
    [key: string]: any;
}

export const remProductFromCart = (payload: string): remProductFromCartAction => ({
    type: CartActionTypes.remProductFromCart,
    payload,
});

interface incCartProductQuantityAction {
    type: typeof CartActionTypes.incCartProductQuantity;
    payload: string;
    [key: string]: any;
}

export const incCartProductQuantity = (payload: string): incCartProductQuantityAction => ({
    type: CartActionTypes.incCartProductQuantity,
    payload,
});

interface decCartProductQuantityAction {
    type: typeof CartActionTypes.decCartProductQuantity;
    payload: string;
    [key: string]: any;
}

export const decCartProductQuantity = (payload: string): decCartProductQuantityAction => ({
    type: CartActionTypes.decCartProductQuantity,
    payload,
});

interface clearCartProductsAction {
    type: typeof CartActionTypes.clearCartProducts;
    [key: string]: any;
}

export const clearCartProducts = (): clearCartProductsAction => ({
    type: CartActionTypes.clearCartProducts,
});

export type CartActions =
    | toggleCartAction
    | addProductToCartAction
    | remProductFromCartAction
    | incCartProductQuantityAction
    | decCartProductQuantityAction
    | clearCartProductsAction;
