import { getDocs, collection } from "firebase/firestore";

import Category from "../../types/category.type";
import CategoryItem from "../category-item/categories-item.component";

import { useEffect, useState } from "react";
import { CategoriesContainer, CategoriesContent } from "./categories.style";

import { db } from "../../config/firebase.config";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const categoriesFromFireBaseStore: Category[] = [];
            const categoriesRef = collection(db, "categories");
            const querySnapshot = await getDocs(categoriesRef);
            querySnapshot.forEach((doc: any) => {
                categoriesFromFireBaseStore.push(doc.data());
            });
            setCategories(categoriesFromFireBaseStore);
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
