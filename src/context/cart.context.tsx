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
    remProductToCart: (productId: string) => void;
    incProductQuantity: (productId: string) => void;
    decProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {},
    remProductToCart: () => {},
    incProductQuantity: () => {},
    decProductQuantity: () => {},
});

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [isVisible, setVisible] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const addProductToCart = (product: Product) => {
        //Verificar se o produto já está no carrinho por meio do ID
        const productItsExists = products.some((item) => item.id === product.id);

        //Se o produto existir aumentamos somente sua quantidade
        if (productItsExists) {
            return setProducts((products) =>
                products.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
            );
        }

        //Se não adiciona o novo item a lista
        setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
    };

    const remProductToCart = (productId: string) => {
        setProducts((products) => products.filter((product) => product.id !== productId));
    };

    const incProductQuantity = (productId: string) => {
        setProducts((products) =>
            products.map((product) =>
                product.id === productId ? { ...product, quantity: product.quantity + 1 } : product,
            ),
        );
    };

    const decProductQuantity = (productId: string) => {};

    const toggleCart = () => {
        setVisible((prevState) => !prevState);
    };
    return (
        <>
            <CartContext.Provider
                value={{
                    isVisible,
                    products,
                    toggleCart,
                    addProductToCart,
                    remProductToCart,
                    incProductQuantity,
                    decProductQuantity,
                }}
            >
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;
