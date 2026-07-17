import Category from "../../types/category.type";
import CategoryItem from "../category-item/categories-item.component";
import axios from "axios";
import env from "../../config/env.config";

import { useEffect, useState } from "react";
import { CategoriesContainer, CategoriesContent } from "./categories.style";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(`${env.apiUrl}/category`);

            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(categories);

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoriesContainer>
            <CategoriesContent>
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}
            </CategoriesContent>
        </CategoriesContainer>
    );
};

export default Categories;
