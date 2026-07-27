import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/cart.context";
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style";
import CustomButton from "./custom-button/custom-button.component";

const Cart = () => {
    const { isVisible, toggleCart } = useContext(CartContext);
    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea onClick={toggleCart} />
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>
                {/* {produtos} */}
                <CartTotal>R$ {"1.000,00"}</CartTotal>
                <CustomButton name="Ir para o Checkout" icon={<FaCartShopping size={12} />}></CustomButton>
            </CartContent>
        </CartContainer>
    );
};

export default Cart;
