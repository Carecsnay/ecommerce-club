import { useContext, useEffect } from "react";

import { CategoryContext } from "../../context/categories.context";
import CategoryItem from "../category-item/categories-item.component";
import LoadingComponent from "../loading/loading.component";
import { CategoriesContainer, CategoriesContent } from "./categories.style";

const Categories = () => {
    const { categories, fetchCategories, isLoading } = useContext(CategoryContext);
    useEffect(() => {
        fetchCategories();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {isLoading && <LoadingComponent />}
            <CategoriesContainer>
                <CategoriesContent>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <CategoryItem category={category} />
                        </div>
                    ))}
                </CategoriesContent>
            </CategoriesContainer>
        </>
    );
};

export default Categories;
