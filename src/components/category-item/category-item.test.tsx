import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Category from "../../types/category.type";
import CategoryItem from "./category-item.component";

describe("Category Item", () => {
    it("should render category correctly", () => {
        const category: Category = {
            id: "1",
            displayName: "lorem",
            imageUrl: "img_url",
            name: "ipsum",
            products: [],
        };
        const { getByText } = render(
            <BrowserRouter>
                <CategoryItem category={category}></CategoryItem>
            </BrowserRouter>,
        );

        getByText("lorem");
    });
});
