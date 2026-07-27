import { createContext, ReactNode, useState } from "react";
import CartProduct from "../types/cart.type";
import Product from "../types/products.type";

interface CartContextProviderProps {
    children: ReactNode;
}

interface ICartContext {
    isVisible: boolean;
    products: CartProduct[];
    toggleCart: () => void;
    addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {},
});

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [isVisible, setVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const addProductToCart = (product: Product) => {
        setProducts((prevStage) => [...prevStage, { ...product, quantity: 1 }]);
    };

    const toggleCart = () => {
        setVisible((prevState) => !prevState);
    };
    return (
        <>
            <CartContext.Provider value={{ isVisible, products, toggleCart, addProductToCart }}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;
