import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { CategoryContext } from "../../context/categories.context";
import { fetchCategories } from "../../store/reducers/category/category-actions";
import CategoryItem from "../category-item/categories-item.component";
import LoadingComponent from "../loading/loading.component";
import { CategoriesContainer, CategoriesContent } from "./categories.style";

const Categories = () => {
    const { categories, isLoading } = useContext(CategoryContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories() as any);
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
