import { render } from "@testing-library/react";

import Colors from "../../theme/theme.colors";
import CustomInput from "./custom-input.component";

describe("Custom Input", () => {
    it("should render with error if hasError is true", () => {
        const { getByPlaceholderText } = render(<CustomInput placeholder="lorem" hasError={true} />);

        const input = getByPlaceholderText("lorem");

        expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` });
    });

    // (it("should render with error if hasError is false", () => {});
});
