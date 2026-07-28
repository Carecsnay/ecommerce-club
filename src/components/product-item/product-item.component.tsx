import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

import { CartContext } from "../../context/cart.context";
import Product from "../../types/products.type";
import CustomButton from "../custom-button/custom-button.component";
import { ProductContainer, ProductImage, ProductInfo } from "./product.item.style";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const { addProductToCart } = useContext(CartContext);
    const handleAddProductToCart = () => {
        addProductToCart(product);
    };
    return (
        <>
            <ProductContainer>
                <ProductImage $imageUrl={product.imageUrl}>
                    <CustomButton
                        onClick={handleAddProductToCart}
                        name={"Adicionar ao Carrinho"}
                        icon={<BsCartPlus size={16} />}
                    />
                </ProductImage>
                <ProductInfo>
                    <p>{product.name}</p>
                    <p>R$ {product.price}</p>
                </ProductInfo>
            </ProductContainer>
        </>
    );
};

export default ProductItem;
