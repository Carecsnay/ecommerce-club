import CartProduct from "../../../types/cart.type";
import CartActionTypes from "./cart-actions.types";

interface InitialState {
    isVisible: boolean;
    products: CartProduct[];
}

const initialState: InitialState = {
    isVisible: false,
    products: [],
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CartActionTypes.toggleCart:
            return { ...state, isVisible: !state.isVisible };
        case CartActionTypes.addProductToCart: {
            const product = action.payload;
            const products = state.products;

            //Verificar se o produto já está no carrinho por meio do ID
            const productItsExists = products.some((item) => item.id === product.id);

            //Se o produto existir aumentamos somente sua quantidade
            if (productItsExists) {
                return {
                    ...state,
                    products: state.products.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                    ),
                };
            }

            //Se não adiciona o novo item a lista
            return { ...state, products: [...state.products, { ...product, quantity: 1 }] };
        }
        default:
            return { ...state };
    }
};

export default cartReducer;
