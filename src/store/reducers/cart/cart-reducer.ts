import CartProduct from "../../../types/cart.type";
import CartActionTypes from "./cart-actions.types";

interface InitialState {
    isVisible: boolean;
    productsTotalPrice: number;
    productsCount: number;
    products: CartProduct[];
}

const initialState: InitialState = {
    isVisible: false,
    productsTotalPrice: 0,
    productsCount: 0,
    products: [],
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CartActionTypes.toggleCart:
            return { ...state, isVisible: !state.isVisible };
        default:
            return { ...state };
    }
};

export default cartReducer;
