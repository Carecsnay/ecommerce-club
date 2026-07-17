import React, { ButtonHTMLAttributes, FunctionComponent } from "react";
import { CustomButtonContainer, IconContainer } from "./custom-button";

// herda as propriedades de um elemento HTML (caso botão)
// para quando usar em outro componente, as propriedades serem acessíveis.
interface CustomButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    icon?: React.ReactNode;
}

// colocando o ...rest eu consigo puxar todas as pripriedades e o meu botão quando for usado em outro
// componente terá todas elas.

const CustomButton: FunctionComponent<CustomButtonProp> = ({ children, name, icon, ...rest }) => {
    return (
        <CustomButtonContainer {...rest}>
            {icon && <IconContainer>{icon}</IconContainer>}
            {name}
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;
