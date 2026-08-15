import { renderWithRedux } from "../../helpers/text.helpers";
import Cart from "./cart.component";

describe("Cart", () => {
    it("should show correct cart product", () => {
        const products = [{ id: "1", name: "bolsa", price: 100, imageUrl: "image-url" }];
        const { getByText } = renderWithRedux(<Cart />, {
            preloadedState: {
                cartReducer: {
                    products: products,
                },
            },
        } as any);

        getByText(/bolsa/i);
    });
});
