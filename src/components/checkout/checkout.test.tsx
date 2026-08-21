import { renderWithRedux } from "../../helpers/text.helpers";
import Checkout from "./checkout.component";

describe("Checkout", () => {
    it("Should checkout render correct products and total price", () => {
        const { getByText, getAllByText } = renderWithRedux(<Checkout />, {
            preloadedState: {
                cartReducer: {
                    products: [
                        {
                            id: "1",
                            name: "bolsa 1",
                            imageUrl: "img_url",
                            price: 1,
                            quantity: 2,
                        },
                        {
                            id: "1",
                            name: "bolsa 2",
                            imageUrl: "img_url",
                            price: 2,
                            quantity: 3,
                        },
                    ],
                    isVisible: false,
                },
            },
        }) as any;

        getByText("bolsa 1"); //nome
        getByText("R$ 1,00"); //preço
        getByText("2"); //quantidade

        getByText("bolsa 2"); //nome
        getByText("R$ 2,00"); //preço
        getByText("3"); //quantidade

        getByText("Finalizar Compra"); //botão
        getByText("Total: R$ 8,00"); //total
    });
});
