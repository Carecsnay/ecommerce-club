import { renderWithRedux } from "../../helpers/text.helpers";
import Product from "../../types/products.type";
import ProductItem from "./product-item.component";

describe("Product Item", () => {
    it("Should product item shows correctly", () => {
        const product: Product = {
            id: "1",
            name: "Bolsa",
            imageUrl: "image_url",
            price: 100,
        };
        const { getByText, getByLabelText } = renderWithRedux(<ProductItem product={product} />, {});

        getByText(/bolsa/i);
        getByText(/R\$\s*100,00/i); //R$ 100,00
        getByText(/adicionar ao carrinho/i); 

        getByLabelText(/add bolsa/i);
    });
});
