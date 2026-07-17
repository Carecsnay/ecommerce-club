import { FunctionComponent } from "react";
import Category from "../../types/category.type";
import { CategoryItemContainer, CategoryName } from "./categories-item.style";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
    return (
        <CategoryItemContainer style={{ backgroundImage: `url('${category.imageUrl}>')` }}>
            <CategoryName>
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    );
};

export default CategoryItem;
