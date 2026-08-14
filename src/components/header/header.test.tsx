import { renderWithRedux } from "../../helpers/text.helpers";
import Header from "./header.component";

describe("Header", () => {
    it("should show sign out button if user is authenticated", () => {
        const { getByText } = renderWithRedux(<Header />, {
            preloadedState: { userReducer: { isAuthenticated: true } } as any,
        });

        getByText("Logout");
    });
});
