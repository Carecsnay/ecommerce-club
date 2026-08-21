import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../../store/toolkit/cart/cart.slice";
import Product from "../../types/products.type";
import { formatCurrency } from "../../utils/formatCurrency";
import CustomButton from "../custom-button/custom-button.component";
import { ProductContainer, ProductImage, ProductInfo } from "./product.item.style";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(product));
    };
    return (
        <>
            <ProductContainer>
                <ProductImage $imageUrl={product.imageUrl}>
                    <CustomButton
                        onClick={handleAddProductToCart}
                        name={"Adicionar ao Carrinho"}
                        icon={<BsCartPlus size={16} />}
                        aria-label={`add ${product.name}`}
                    />
                </ProductImage>
                <ProductInfo>
                    <p>{product.name}</p>
                    <p>{formatCurrency(product.price)}</p>
                </ProductInfo>
            </ProductContainer>
        </>
    );
};

export default ProductItem;
