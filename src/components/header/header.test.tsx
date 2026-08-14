import { renderWithRedux } from "../../helpers/text.helpers";
import CartProduct from "../../types/cart.type";
import Header from "./header.component";

describe("Header", () => {
    it("should show sign out button if user is authenticated", () => {
        const { getByText } = renderWithRedux(<Header />, {
            preloadedState: { userReducer: { isAuthenticated: true } } as any,
        });

        getByText("Logout");
    });

    it("should show sign out button if user is NOT authenticated", () => {
        const { getByText } = renderWithRedux(<Header />, {
            preloadedState: { userReducer: { isAuthenticated: false } } as any,
        });

        getByText(/criar conta/i);
        getByText(/login/i);
    });

    it("should show correct cart products QUANTITY", () => {
        const products: CartProduct[] = [
            { id: "1", imageUrl: "image-url", quantity: 1, name: "calça", price: 100 },
            { id: "2", imageUrl: "image-url", quantity: 2, name: "jaqueta", price: 200 },
        ];

        const { getByText } = renderWithRedux(<Header />, {
            preloadedState: {
                cartReducer: {
                    products: products,
                },
            } as any,
        });

        getByText("3");
    });
});
