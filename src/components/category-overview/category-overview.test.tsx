import { renderWithRedux } from "../../helpers/text.helpers";
import Category from "../../types/category.type";
import CategoryOverview from "./category-overview.component";

describe("Category Overview", () => {
    it("Should shows category and itens correctly", () => {
        const category: Category = {
            id: "1",
            displayName: "Esportes",
            imageUrl: "img_url",
            name: "ipsum",
            products: [
                {
                    id: "1",
                    name: "bolsa 1",
                    imageUrl: "img_url",
                    price: 10,
                },
                {
                    id: "2",
                    name: "bolsa 2",
                    imageUrl: "img_url",
                    price: 12,
                },
                {
                    id: "3",
                    name: "bolsa 3",
                    imageUrl: "img_url",
                    price: 15,
                },
                {
                    id: "4",
                    name: "bolsa 4",
                    imageUrl: "img_url",
                    price: 17,
                },
                {
                    id: "5",
                    name: "bolsa 5",
                    imageUrl: "img_url",
                    price: 20,
                },
                {
                    id: "6",
                    name: "bolsa 6",
                    imageUrl: "img_url",
                    price: 22,
                },
            ],
        };
        const { getByText, queryByText } = renderWithRedux(<CategoryOverview category={category} />, {});

        // Nome da categoria
        getByText(/esportes/i);

        // Produtos
        getByText(/bolsa 1/i);
        getByText(/bolsa 2/i);
        getByText(/bolsa 3/i);
        getByText(/bolsa 4/i);
        getByText(/bolsa 5/i);
        // GetByText(/bolsa 6/i);  erro pq só renderiza 5 por página

        getByText("R$ 10,00");
        getByText("R$ 12,00");
        getByText("R$ 15,00");
        getByText("R$ 17,00");
        getByText(/R\$\s*20,00/i);
        // GetByText(/R\$\s*22,00/i); erro pq só renderiza 5 por página

        // Testar o que não aparece
        expect(queryByText('bolsa 6')).toBeNull;
    });
});
