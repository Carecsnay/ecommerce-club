import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import rootReducer, { RootState } from "../store/root-reducer";

export const renderWithRedux = (
    component: React.ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: rootReducer,
            preloadedState,
        }),
        ...renderOptions
    }: { preloadedState: RootState; store?: any },
) => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
        return (
            <BrowserRouter>
                <Provider store={store}>{children}</Provider>
            </BrowserRouter>
        );
    };
    return render(component, { wrapper: Wrapper, ...renderOptions });
};
