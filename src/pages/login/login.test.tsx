import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/text.helpers";
import LoginPage from "./login.page";

describe("Login", () => {
    it("Should show error when trying to submit witout filling required fields ", async () => {
        const { getByText, findByText } = renderWithRedux(<LoginPage />, {});

        const submitButton = getByText("Entrar");
        userEvent.click(submitButton);

        await findByText("O email é obrigatório.");
        getByText("A senha é obrigatória.");
    });

    it("Should show error when user type a invalid email", async () => {
        const { getByPlaceholderText, findByText, getByText } = renderWithRedux(<LoginPage />, {});

        const emailInput = getByPlaceholderText("Digite seu e-mail");
        userEvent.type(emailInput, "INVALID_EMAIL");

        const submitButton = getByText("Entrar");
        userEvent.click(submitButton);

        await findByText("Digite um e-mail válido (ex: nome@email.com).");
    });

    it("Should show error when user stay input password empty", async () => {
        const { getByPlaceholderText, findByText, getByText } = renderWithRedux(<LoginPage />, {});

        const passwordInput = getByPlaceholderText("Digite seu e-mail");
        userEvent.type(passwordInput, "");

        const submitButton = getByText("Entrar");
        userEvent.click(submitButton);

        await findByText("A senha é obrigatória.");
    });
});
