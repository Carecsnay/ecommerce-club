import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converter/firestore.converter";
import Category from "../../types/category.type";
import CategoryItem from "../category-item/categories-item.component";
import LoadingComponent from "../loading/loading.component";
import { CategoriesContainer, CategoriesContent } from "./categories.style";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCategories = async () => {
        try {
            setIsLoading(true);
            const categoriesFromFireBaseStore: Category[] = [];
            const categoriesRef = collection(db, "categories").withConverter(categoryConverter);
            const querySnapshot = await getDocs(categoriesRef);
            querySnapshot.forEach((doc) => {
                categoriesFromFireBaseStore.push(doc.data());
            });
            setCategories(categoriesFromFireBaseStore);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

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
