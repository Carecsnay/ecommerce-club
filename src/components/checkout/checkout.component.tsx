import { useContext } from "react";
import { BsBagCheck } from "react-icons/bs";

import { CartContext } from "../../context/cart.context";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from "./checkout.style";

const Checkout = () => {
    const { products, productsTotalPrice } = useContext(CartContext);
    return (
        <>
            <CheckoutContainer>
                <CheckoutTitle>Checkout</CheckoutTitle>
                {products.length > 0 ? (
                    <>
                        <CheckoutProducts>
                            {products.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                        </CheckoutProducts>
                        <CheckoutTotal>{formatCurrency(productsTotalPrice)}</CheckoutTotal>
                        <CustomButton name="Finalizar Compra" icon={<BsBagCheck size={20} />} />
                    </>
                ) : (
                    <span>
                        <p>⚠️</p>
                        <p>Seu carrinho está vazio!</p>
                    </span>
                )}
            </CheckoutContainer>
        </>
    );
};

export default Checkout;
