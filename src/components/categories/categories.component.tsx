import Category from "../../types/category.type";
import CategoryItem from "../category-item/categories-item.component";
import axios from "axios";
import env from "../../config/env.config";

import { useEffect, useState } from "react";

import "./categories.style.css";

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
        <div className="categories-container">
            <div className="categories-content">
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
