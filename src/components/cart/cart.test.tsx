import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/text.helpers";
import Cart from "./cart.component";

describe("Cart", () => {
    it("should show correct cart product", () => {
        const products = [{ id: "1", name: "bolsa", price: 100, imageUrl: "image-url", quantity: 3 }];
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
    it("should increase cart quantity on increase click", () => {
        const products = [{ id: "1", name: "bolsa", price: 100, imageUrl: "image-url", quantity: 2 }];
        const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
            preloadedState: {
                cartReducer: {
                    products: products,
                },
            },
        } as any);

        const increaseButton = getByLabelText(/increase quantity of bolsa/i);
        userEvent.click(increaseButton);

        getByText("3");
    });

    it("should increase cart quantity on decrease click", () => {
        const products = [{ id: "1", name: "bolsa", price: 100, imageUrl: "image-url", quantity: 2 }];
        const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
            preloadedState: {
                cartReducer: {
                    products: products,
                },
            },
        } as any);

        const decreaseButton = getByLabelText(/decrease quantity of bolsa/i);
        userEvent.click(decreaseButton);

        getByText("1");
    });
});
