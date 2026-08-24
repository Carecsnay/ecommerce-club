import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/text.helpers";
import LoginPage from "./login.page";

import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
jest.mock("firebase/auth");

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

    it("Should show error when invalid credentials are provided", async () => {
        const mockFirebaseAuth = signInWithEmailAndPassword as jest.Mock;

        mockFirebaseAuth.mockRejectedValue({
            code: AuthErrorCodes.INVALID_LOGIN_CREDENTIALS,
        });

        const { getByPlaceholderText, getByText, findAllByText } = renderWithRedux(<LoginPage />, {});

        const emailInput = getByPlaceholderText("Digite seu e-mail");
        const passwordInput = getByPlaceholderText("Digite sua senha");

        userEvent.type(emailInput, "usuario@teste.com");
        userEvent.type(passwordInput, "senha123");

        const submitButton = getByText("Entrar");
        userEvent.click(submitButton);

        await findAllByText("E-mail ou senha incorretos.");
    });

});
