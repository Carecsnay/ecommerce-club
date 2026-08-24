import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../helpers/text.helpers";
import LoginPage from "./login.page";
import { getByText } from "@testing-library/dom";

describe("Login", () => {
    it("Should show error when trying to submit witout filling required fields ", async () => {
        const { getByText, findByText } = renderWithRedux(<LoginPage />, {});

        const submitButton = getByText("Entrar");
        userEvent.click(submitButton);

        await findByText("O email é obrigatório.");
        getByText("A senha é obrigatória.");
    });
});
