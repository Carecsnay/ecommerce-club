import Product from "../../types/products.type";
import { ProductContainer, ProductImage, ProductInfo } from "./product.item.style";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <>
            <ProductContainer>
                <ProductImage $imageUrl={product.imageUrl}></ProductImage>
                <ProductInfo>
                    <p>{product.name}</p>
                    <p>R$ {product.price}</p>
                </ProductInfo>
            </ProductContainer>
        </>
    );
};

export default ProductItem;
