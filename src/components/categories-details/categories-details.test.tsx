import * as firestore from "firebase/firestore";
import { renderWithRedux } from "../../helpers/text.helpers";
import Category from "../../types/category.type";
import CategoriesDetailsComponent from "./categories-details.component";

jest.mock("firebase/firestore");

describe("Categories Details", () => {
    it("Should fetch category and render correctly with your products", async () => {
        const getDocsMock = firestore.getDocs as jest.Mock;
        const collectionMock = firestore.collection as jest.Mock;
        const queryMock = firestore.query as jest.Mock;
        const whereMock = firestore.where as jest.Mock;

        const mockCategoryData: Category = {
            id: "1",
            displayName: "Categoria Muito Legal",
            name: "Ipsum Lorem",
            imageUrl: "image_url",
            products: [{ id: "1", imageUrl: "image_url", name: "cinto", price: 320 }],
        };

        collectionMock.mockReturnValue({
            withConverter: () => ({}),
        });
        queryMock.mockReturnValue({});
        whereMock.mockReturnValue({});

        getDocsMock.mockResolvedValue({
            docs: [
                {
                    id: "1",
                    data: () => mockCategoryData,
                },
            ],
        });

        const { findByText, getByText } = renderWithRedux(<CategoriesDetailsComponent categoryId="any_id" />, {});

        await findByText(/explorar categoria muito legal/i);
        getByText(/cinto/i);
        getByText("R$ 320,00");
    });
});
