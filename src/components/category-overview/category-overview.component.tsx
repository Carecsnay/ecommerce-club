import Category from "../../types/category.type";
import ProductItem from "../product-item/product-item.component";
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./category-overview.style";

interface CategoryOverviewProps {
    category: Category;
}
const CategoryOverview = ({ category }: CategoryOverviewProps) => {
    return (
        <>
            <CategoryContainer>
                <CategoryTitle>{category.displayName}</CategoryTitle>
                <ProductsContainer>
                    {category.products.slice(0, 5).map((product) => (
                        <ProductItem key={product.id} product={product}></ProductItem>
                    ))}
                </ProductsContainer>
            </CategoryContainer>
        </>
    );
};

export default CategoryOverview;
