import { useContext } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { CartContext } from "../../context/cart.context";
import CartProduct from "../../types/cart.type";
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.style";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    const { remProductToCart, incProductQuantity, decProductQuantity } = useContext(CartContext);
    const handleRemProductClick = () => {
        remProductToCart(product.id);
    };

    const handleIncProductClick = () => {
        incProductQuantity(product.id);
    };

    const handleDecProductClick = () => {
        decProductQuantity(product.id);
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
