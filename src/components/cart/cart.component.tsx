import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";

import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style";

const Cart = () => {
    const { isVisible, products, productsTotalPrice, productsCount, toggleCart } = useContext(CartContext);
    return (
        <CartContainer $isVisible={isVisible}>
            <CartEscapeArea onClick={toggleCart} />
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>
                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
                {productsCount > 0 && <CartTotal>R$ {productsTotalPrice}</CartTotal>}
                {productsCount > 0 && (
                    <CustomButton name="Ir para o Checkout" icon={<FaCartShopping size={12} />}></CustomButton>
                )}
                {productsCount <= 0 && <p>Seu carrinho está vazio!</p>}
            </CartContent>
        </CartContainer>
    );
};

export default Cart;
