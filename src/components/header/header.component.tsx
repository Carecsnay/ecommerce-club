import { BsCart } from "react-icons/bs";
import React from "react";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const IconeCarrinho = BsCart as React.ElementType;
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };
    return (
        <HeaderContainer>
            <HeaderTitle>Club Clothing</HeaderTitle>
            <HeaderItem>
                <HeaderItems>
                    <HeaderItem>
                        <span>Explorar</span>
                    </HeaderItem>
                    <HeaderItem
                        onClick={() => {
                            handleLoginClick();
                        }}
                    >
                        <span>Login</span>
                    </HeaderItem>
                    <HeaderItem>
                        <span>Criar conta</span>
                    </HeaderItem>
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
