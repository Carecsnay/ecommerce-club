import { InputHTMLAttributes, FunctionComponent } from "react";
import { CustomInputContainer } from "./custom-input";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = ({ hasError, ...rest }) => {
    return <CustomInputContainer {...rest} hasError={hasError} />;
};

export default CustomInput;
