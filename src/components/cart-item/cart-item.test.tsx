import { renderWithRedux } from "../../helpers/text.helpers";
import CartProduct from "../../types/cart.type";
import CartItem from "./cart-item.component";

describe("Cart Item", () => {
    it("should show correct cart item", () => {
        const cartItem: CartProduct = {
            id: "1",
            name: "Bolsa",
            imageUrl: "image_url",
            price: 100,
            quantity: 1,
        };

        const { getByText, getByLabelText } = renderWithRedux(<CartItem product={cartItem} />, {});

        getByText(/Bolsa/i);
        getByText(/R\$\s*100,00/i); //R$ 100,00
        getByText(1);

        getByLabelText(/increase quantity of bolsa/i);
        getByLabelText(/decrease quantity of bolsa/i);
        getByLabelText(/remove bolsa/i);
    });
});
