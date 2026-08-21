import * as firestore from "firebase/firestore";
import { renderWithRedux } from "../../helpers/text.helpers";
import Categories from "./categories.component";

// Moka o módulo do Firestore
jest.mock("firebase/firestore");

describe("Categories", () => {
    it("Should fetch and show categories", async () => {
        const getDocsMock = firestore.getDocs as jest.Mock;
        const collectionMock = firestore.collection as jest.Mock;

        collectionMock.mockReturnValue({
            withConverter: () => ({}),
        });

        // Objeto simulado da categoria
        const mockCategoryData = {
            id: "1",
            displayName: "Lorem Ipsum",
        };

        // 2. Mock do getDocs com suporte ao método .forEach() do Snapshot
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

        const { findByText, getByText } = renderWithRedux(<Categories />, {});
        await findByText(/Lorem Ipsum/i);
        getByText(/explorar/i);
    });
});
