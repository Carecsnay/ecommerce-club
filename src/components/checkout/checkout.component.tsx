import { useContext } from "react";
import { BsBagCheck } from "react-icons/bs";

import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from "./checkout.style";

const Checkout = () => {
    const { products, productsTotalPrice } = useContext(CartContext);
    return (
        <>
            <CheckoutContainer>
                <CheckoutTitle>Checkout</CheckoutTitle>
                <CheckoutProducts>
                    {products.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </CheckoutProducts>
                <CheckoutTotal>R$: {productsTotalPrice}</CheckoutTotal>
                <CustomButton name="Finalizar Compra" icon={<BsBagCheck size={16} />}></CustomButton>
            </CheckoutContainer>
        </>
    );
};

export default Checkout;
