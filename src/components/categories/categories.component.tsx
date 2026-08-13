import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../hooks/redux.hooks";
import { fetchCategories } from "../../store/toolkit/category/category.slice";
import CategoryItem from "../category-item/category-item.component";
import LoadingComponent from "../loading/loading.component";
import { CategoriesContainer, CategoriesContent } from "./categories.style";

const Categories = () => {
    const { isLoading, categories } = useAppSelector((state) => state.categoryReducer);
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
