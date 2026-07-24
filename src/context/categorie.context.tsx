import { collection, getDocs } from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from "../config/firebase.config";
import { categoryConverter } from "../converter/firestore.converter";
import Category from "../types/category.type";

interface ICategoriesContext {
    categories: Category[];
    fetchCategories: () => Promise<void>;
    isLoading: boolean;
}

interface CategoriesContextProviderProps {
    children: ReactNode;
}

export const CategoryContext = createContext<ICategoriesContext>({
    categories: [],
    fetchCategories: () => Promise.resolve(),
    isLoading: false,
});

const CategoryContextProvider = ({ children }: CategoriesContextProviderProps) => {
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
        <CategoryContext.Provider value={{ isLoading, categories, fetchCategories }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryContextProvider;
