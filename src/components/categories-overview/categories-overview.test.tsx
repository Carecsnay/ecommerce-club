import * as firestore from "firebase/firestore";
import { renderWithRedux } from "../../helpers/text.helpers";
import Category from "../../types/category.type";
import CategoriesOverview from "./categories-overview.component";

jest.mock("firebase/firestore");

describe("Categories Overview", () => {
    it("Should fetch and show categories", async () => {
        const getDocsMock = firestore.getDocs as jest.Mock;
        const collectionMock = firestore.collection as jest.Mock;

        const mockCategoryData: Category = {
            id: "1",
            displayName: "Lorem Ipsum",
            name: "Ipsum Lorem",
            imageUrl: "image_url",
            products: [{ id: "1", imageUrl: "image_url", name: "cinto", price: 320 }],
        };

        collectionMock.mockReturnValue({
            withConverter: () => ({}),
        });

        getDocsMock.mockResolvedValue({
            docs: [
                {
                    id: "1",
                    data: () => mockCategoryData,
                },
            ],
            forEach: function (callback: (doc: any) => void) {
                this.docs.forEach(callback);
            },
        });

        const { findByText, getByText } = renderWithRedux(<CategoriesOverview />, {});
        getByText(/Lorem Ipsum/i); //Nome da categoria
        await findByText(/cinto/i); //Nome do produto renderizado
        getByText("R$ 320,00"); //Preço do produto
    });
});
