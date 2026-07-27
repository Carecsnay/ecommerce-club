import { createContext, ReactNode, useState } from "react";
import CartProduct from "../types/cart.type";

interface CartContextProviderProps {
    children: ReactNode;
}

interface ICartContext {
    isVisible: boolean;
    products: CartProduct[];
    toggleCart: () => void;
}

export const CartContext = createContext<ICartContext>({ isVisible: false, products: [], toggleCart: () => {} });

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [isVisible, setVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const toggleCart = () => {
        setVisible((prevState) => !prevState);
    };
    return (
        <>
            <CartContext.Provider value={{ isVisible, products, toggleCart }}>{children}</CartContext.Provider>;
        </>
    );
};

export default CartContextProvider;
