import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../hooks/redux.hooks";
import { fetchCategories } from "../../store/reducers/category/category-actions";
import CategoryOverview from "../category-overview/category-overview.component";
import LoadingComponent from "../loading/loading.component";
import { Container } from "./categories-overview.style";

const CategoriesOverview = () => {
    const { categories, isLoading } = useAppSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories() as any);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) return <LoadingComponent />;
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
