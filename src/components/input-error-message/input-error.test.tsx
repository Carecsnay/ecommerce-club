import { render } from "@testing-library/react";

import Colors from "../../theme/theme.colors";
import InputErrorMessage from "./input-error.message.component";

describe("Input Error", () => {
    it("should show message with error color", () => {
        const { getByText } = render(<InputErrorMessage>lorem</InputErrorMessage>);

        const message = getByText("lorem");

        expect(message).toHaveStyle({ color: Colors.error });
    });
});
