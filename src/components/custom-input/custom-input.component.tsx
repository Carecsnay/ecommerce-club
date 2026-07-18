import React, { InputHTMLAttributes, FunctionComponent } from "react";
import { CustomInputContainer } from "./custom-input";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef((props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
