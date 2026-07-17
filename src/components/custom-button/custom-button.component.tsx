import React, { FunctionComponent } from "react";
import { CustomButtonContainer, IconContainer } from "./custom-button";

interface CustomButtonProp {
    name: string;
    icon?: React.ReactNode;
}

const CustomButton: FunctionComponent<CustomButtonProp> = ({ name, icon }) => {
    return (
        <CustomButtonContainer>
            <>
                {icon && <IconContainer>{icon}</IconContainer>}
                {name}
            </>
        </CustomButtonContainer>
    );
};

export default CustomButton;
