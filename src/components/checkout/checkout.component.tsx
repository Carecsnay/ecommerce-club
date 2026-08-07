import axios from "axios";
import { useState } from "react";
import { BsBagCheck } from "react-icons/bs";

import { useAppSelector } from "../../hooks/redux.hooks";
import { selectProductsTotalPrice } from "../../store/reducers/cart/cart-selectors";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import LoadingComponent from "../loading/loading.component";
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from "./checkout.style";

const Checkout = () => {
    const { products } = useAppSelector((state) => state.cartReducer);
    const productsTotalPrice = useAppSelector(selectProductsTotalPrice);
    const [isLoading, setIsLoading] = useState(false);

    const handleFinishPurchaseClick = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/create-checkout-session`, { products });
            window.location.href = data.url;
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            {isLoading && <LoadingComponent />}
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
                        <CustomButton
                            onClick={handleFinishPurchaseClick}
                            name="Finalizar Compra"
                            icon={<BsBagCheck size={20} />}
                        />
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
