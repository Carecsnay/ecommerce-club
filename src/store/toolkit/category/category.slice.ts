import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../../config/firebase.config";
import { categoryConverter } from "../../../converter/firestore.converter";
import Category from "../../../types/category.type";

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
    const categoriesFromFireBaseStore: Category[] = [];
    const categoriesRef = collection(db, "categories").withConverter(categoryConverter);
    const querySnapshot = await getDocs(categoriesRef);
    querySnapshot.forEach((doc) => {
        categoriesFromFireBaseStore.push(doc.data());
    });
    //Se tudo ocorrer bem, a ação é dispadara pelo payload de sucesso ↓
    return categoriesFromFireBaseStore;
});

interface InitialState {
    categories: Category[];
    isLoading: boolean;
}

const initialState: InitialState = {
    categories: [],
    isLoading: false,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //action quando chamamos a fetchCategories
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
        });
        //action de success da fetchCategories
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        });
        //action de erro
        builder.addCase(fetchCategories.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default categorySlice.reducer;
