import { renderWithRedux } from "../../helpers/text.helpers";
import Header from "./header.component";

describe("Header", () => {
    it("should show sign out button if user is authenticated", () => {
        const { getByText } = renderWithRedux(<Header />, {
            preloadedState: { userReducer: { isAuthenticated: true } } as any,
        });

        getByText("Logout");
    });

    it("should show sign out button if user is NOT authenticated", () => {
        const { getByText } = renderWithRedux(<Header />, {
            preloadedState: { userReducer: { isAuthenticated: false } } as any,
        });

        getByText(/criar conta/i);
        getByText(/login/i);
    });
});
