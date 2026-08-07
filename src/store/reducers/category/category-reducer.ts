import Category from "../../../types/category.type";
import CategoryActionsTypes from "./category-actions types";

interface InitialState {
    categories: Category[];
    isLoading: boolean;
}

const initialState: InitialState = {
    categories: [],
    isLoading: false,
};

const categoryReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case CategoryActionsTypes.fetchStart:
            return { ...state, isLoading: true };
        case CategoryActionsTypes.fetchSuccess:
            return { ...state, isLoading: false, categories: action.payload };
        case CategoryActionsTypes.fetchFailure:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};

export default categoryReducer;