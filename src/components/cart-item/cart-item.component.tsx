import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

import {
    decCartProductQuantity,
    incCartProductQuantity,
    remProductFromCart,
} from "../../store/reducers/cart/cart-actions";
import CartProduct from "../../types/cart.type";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.style";

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    const dispatch = useDispatch();

    const handleRemProductClick = () => {
        dispatch(remProductFromCart(product.id));
    };

    const handleIncProductClick = () => {
        dispatch(incCartProductQuantity(product.id));
    };

    const handleDecProductClick = () => {
        dispatch(decCartProductQuantity(product.id));
    };

    return (
        <CartItemContainer>
            <CartItemImage $imageUrl={product.imageUrl} />
            <CartItemInfo>
                <p>{product.name}</p>
                <p>{formatCurrency(product.price)}</p>
                <CartItemQuantity>
                    <AiOutlineMinus size={16} onClick={handleDecProductClick} />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus size={16} onClick={handleIncProductClick} />
                </CartItemQuantity>
            </CartItemInfo>
            <RemoveButton onClick={handleRemProductClick}>
                <AiOutlineClose size={22} />
            </RemoveButton>
        </CartItemContainer>
    );
};

export default CartItem;
