import { renderWithRedux } from "../../helpers/text.helpers";
import SignUpPage from "./sign-up.page";

describe("Sign Up", () => {
    it("Should render title correctly", () => {
        const { getByText } = renderWithRedux(<SignUpPage />, {});

        getByText("Crie sua conta");
    });

    
});
