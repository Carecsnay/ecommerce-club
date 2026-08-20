import { renderWithRedux } from "../../helpers/text.helpers";
import Cart from "./cart.component";

describe("Cart", () => {
    it("should show correct cart product", () => {
        const products = [{ id: "1", name: "bolsa", price: 100, imageUrl: "image-url", quantity: "3" }];
        const { getByText } = renderWithRedux(<Cart />, {
            preloadedState: {
                cartReducer: {
                    products: products,
                },
            },
        } as any);

        getByText(/bolsa/i);
        getByText(/100/i);
        getByText(3);
        getByText(/ir para o checkout/i);
    });
    it("should not show checkout button and should show an empty message if cart is empty", () => {
        const { getByText, queryByText } = renderWithRedux(<Cart />, {
            preloadedState: {
                cartReducer: {
                    products: [],
                },
            },
        } as any);

        getByText(/Seu carrinho está vazio!/i);
        expect(queryByText(/ir para o checkout/i)).toBeNull();
    });
});
