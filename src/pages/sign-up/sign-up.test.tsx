import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/text.helpers";
import SignUpPage from "./sign-up.page";

describe("Sign Up", () => {
    it("Should render title correctly", () => {
        const { getByText } = renderWithRedux(<SignUpPage />, {});

        getByText("Crie sua conta");
    });

    it.only("Should show error if name input is empty", async () => {
        const { getByText, findByText } = renderWithRedux(<SignUpPage />, {});

        const submitButton = getByText(/criar conta/i);
        userEvent.click(submitButton);

        await findByText("O nome é obrigatório.");
    });
});
