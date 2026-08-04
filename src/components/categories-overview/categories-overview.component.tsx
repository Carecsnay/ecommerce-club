import { useContext } from "react";

import { CategoryContext } from "../../context/categories.context";
import CategoryOverview from "../category-overview/category-overview.component";
import { Container } from "./categories-overview.style";

const CategoriesOverview = () => {
    const { categories } = useContext(CategoryContext);
    return (
        <>
            <Container>
                {categories.map((category) => (
                    <CategoryOverview key={category.id} category={category} />
                ))}
            </Container>
        </>
    );
};

export default CategoriesOverview;
