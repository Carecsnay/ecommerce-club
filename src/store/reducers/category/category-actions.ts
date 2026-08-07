import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";

import { db } from "../../../config/firebase.config";
import { categoryConverter } from "../../../converter/firestore.converter";
import Category from "../../../types/category.type";
import CategoryActionsTypes from "./category-actions types";

export const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CategoryActionsTypes.fetchStart });
        try {
            const categoriesFromFireBaseStore: Category[] = [];
            const categoriesRef = collection(db, "categories").withConverter(categoryConverter);
            const querySnapshot = await getDocs(categoriesRef);
            querySnapshot.forEach((doc) => {
                categoriesFromFireBaseStore.push(doc.data());
            });

            dispatch({
                type: CategoryActionsTypes.fetchSuccess,
                payload: categoriesFromFireBaseStore,
            });
        } catch (error) {
            dispatch({
                type: CategoryActionsTypes.fetchFailure,
            });
        }
    };
};
