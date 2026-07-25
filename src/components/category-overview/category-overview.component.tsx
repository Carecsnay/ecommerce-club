import Category from "../../types/category.type";
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./category-overview.style";

interface CategoryOverviewProps {
    category: Category;
}
const CategoryOverview = ({ category }: CategoryOverviewProps) => {
    return (
        <>
            <CategoryContainer>
                <CategoryTitle>{category.displayName}</CategoryTitle>
                <ProductsContainer></ProductsContainer>
            </CategoryContainer>
        </>
    );
};

export default CategoryOverview;
