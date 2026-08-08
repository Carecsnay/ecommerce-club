import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartProduct from "../../../types/cart.type";
import Product from "../../../types/products.type";

interface InitialState {
    isVisible: boolean;
    products: CartProduct[];
}

const initialState: InitialState = {
    isVisible: false,
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isVisible = !state.isVisible;
        },

        addProductToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const products = state.products;

            //Verificar se o produto já está no carrinho por meio do ID
            const productItsExists = products.some((item) => item.id === product.id);

            //Se o produto existir aumentamos somente sua quantidade
            if (productItsExists) {
                state.products = state.products.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                );
                return;
            }

            //Se não adiciona o novo item a lista
            state.products = [...state.products, { ...product, quantity: 1 }];
        },

        remProductFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },

        incCartProductQuantity: (state, action: PayloadAction<string>) => {
            state.products = state.products.map((product) =>
                product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product,
            );
        },

        decCartProductQuantity: (state, action: PayloadAction<string>) => {
            state.products = state.products
                .map((product) =>
                    product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product,
                )
                .filter((product) => product.quantity > 0);
        },

        clearCartProducts: (state) => {
            state.products = [];
        },
    },
});

export const {
    toggleCart,
    addProductToCart,
    incCartProductQuantity,
    remProductFromCart,
    clearCartProducts,
    decCartProductQuantity, 
} = cartSlice.actions;

export default cartSlice.reducer;
