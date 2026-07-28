import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CartProduct from "../../types/cart.type";
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.style";

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    return (
        <CartItemContainer>
            <CartItemImage $imageUrl={product.imageUrl} />
            <CartItemInfo>
                <p>{product.name}</p>
                <p>R${product.price}</p>
                <CartItemQuantity>
                    <AiOutlineMinus size={16} />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus size={16} />
                </CartItemQuantity>
            </CartItemInfo>
            <RemoveButton>
                <AiOutlineClose size={20} />
            </RemoveButton>
        </CartItemContainer>
    );
};

export default CartItem;
