import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/text.helpers";
import SignUpPage from "./sign-up.page";

describe("Sign Up", () => {
    it("Should render title correctly", () => {
        const { getByText } = renderWithRedux(<SignUpPage />, {});

        getByText("Crie sua conta");
    });

    it("Should show error if inputs of form is will empty", async () => {
        const { getByText, findByText } = renderWithRedux(<SignUpPage />, {});

        const submitButton = getByText(/criar conta/i);
        userEvent.click(submitButton);

        await findByText("O nome é obrigatório.");
        getByText("O sobrenome é obrigatório.");
        getByText("O e-mail é obrigatório.");
        getByText("A senha é obrigatória.");
        getByText("A confirmação de senha é obrigatória.");
    });
});
