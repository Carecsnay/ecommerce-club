import CartProduct from "../../../types/cart.type";
import { CartActions } from "./cart-actions";
import CartActionTypes from "./cart-actions.types";

interface InitialState {
    isVisible: boolean;
    products: CartProduct[];
}

const initialState: InitialState = {
    isVisible: false,
    products: [],
};

const cartReducer = (state = initialState, action: CartActions): InitialState => {
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

        case CartActionTypes.remProductFromCart:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };

        case CartActionTypes.incCartProductQuantity:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product,
                ),
            };
        case CartActionTypes.decCartProductQuantity:
            return {
                ...state,
                products: state.products
                    .map((product) =>
                        product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product,
                    )
                    .filter((product) => product.quantity > 0),
            };

        case CartActionTypes.clearCartProducts:
            return {
                ...state,
                products: [],
            };
        default:
            return state;
    }
};

export default cartReducer;
