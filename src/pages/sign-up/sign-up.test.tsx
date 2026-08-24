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

    it("Should show error when user type a invalid email", async () => {
        const { getByPlaceholderText, findByText, getByText } = renderWithRedux(<SignUpPage />, {});

        const emailInput = getByPlaceholderText("Digite seu e-mail");
        userEvent.type(emailInput, "INVALID_EMAIL");

        const submitButton = getByText("Criar Conta");
        userEvent.click(submitButton);

        await findByText("Por favor, insira um e-mail válido.");
    });

    it("Should must display an error message if the passwords are not identical", async () => {
        const { getByPlaceholderText, findByText, getByText } = renderWithRedux(<SignUpPage />, {});

        const password = getByPlaceholderText("Digite sua senha");
        userEvent.type(password, "123456");
        const passwordConfirmationInput = getByPlaceholderText("Digite novamente sua senha");
        userEvent.type(passwordConfirmationInput, "123457");

        const submitButton = getByText("Criar Conta");
        userEvent.click(submitButton);

        await findByText("A confirmação de senha precisa ser igual a senha.");
    });

    it("Should show error if passwords have less than 6 characters", async () => {
        const { getByPlaceholderText, findAllByText, getByText } = renderWithRedux(<SignUpPage />, {});

        const password = getByPlaceholderText("Digite sua senha");
        userEvent.type(password, "123");
        const passwordConfirmationInput = getByPlaceholderText("Digite novamente sua senha");
        userEvent.type(passwordConfirmationInput, "123");

        const submitButton = getByText("Criar Conta");
        userEvent.click(submitButton);

        await findAllByText("A senha deve conter pelo menos seis caracteres."); //multiplos valores, usamos findAllByText
    });

    it("Should render a button correctly", async () => {
        const { getByText } = renderWithRedux(<SignUpPage />, {});
        getByText("Criar Conta");
    });
});
