import { useState } from "react";
import Category from "../../types/category.type";

interface CategoriesDetailsProps {
    categoryId: string;
}

const CategoriesDetailsComponent = ({ categoryId }: CategoriesDetailsProps) => {
    const [category, setCategory] = useState<Category | null>(null);

    return (
        <>
            <>{}</>
        </>
    );
};

export default CategoriesDetailsComponent;
