import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { CartContext } from "../../context/cart.context";
import { useAppSelector } from "../../hooks/redux.hooks";
import toggleCart from "../../store/reducers/cart/cart-actions";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCheckoutClick = () => {
        navigate("/checkout");
        dispatch(toggleCart());
    };

    const handleEscapeAreaClick = () => {
        dispatch(toggleCart());
    };

    const { isVisible } = useAppSelector((state) => state.cartReducer);
    const { products, productsTotalPrice, productsCount } = useContext(CartContext);
    return (
        <CartContainer $isVisible={isVisible}>
            <CartEscapeArea onClick={handleEscapeAreaClick} />
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>
                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
                {productsCount > 0 && (
                    <>
                        <CartTotal>{formatCurrency(productsTotalPrice)}</CartTotal>
                        <CustomButton
                            onClick={handleCheckoutClick}
                            name="Ir para o Checkout"
                            icon={<FaCartShopping size={12} />}
                        ></CustomButton>
                    </>
                )}
                {productsCount <= 0 && (
                    <span>
                        <p>⚠️</p>
                        <p>Seu carrinho está vazio!</p>
                    </span>
                )}
            </CartContent>
        </CartContainer>
    );
};

export default Cart;
