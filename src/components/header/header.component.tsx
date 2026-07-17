import { BsCart } from "react-icons/bs";
import React from "react";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style";

const Header = () => {
    const IconeCarrinho = BsCart as React.ElementType;

    return (
        <HeaderContainer>
            <HeaderTitle>Club Clothing</HeaderTitle>
            <HeaderItem>
                <HeaderItems>
                    <HeaderItem>Explorar</HeaderItem>
                    <HeaderItem>Login</HeaderItem>
                    <HeaderItem>Criar conta</HeaderItem>
                    <HeaderItem>
                        <IconeCarrinho size={25} />
                        <p style={{ marginLeft: 5 }}>5</p>
                    </HeaderItem>
                </HeaderItems>
            </HeaderItem>
        </HeaderContainer>
    );
};

export default Header;
