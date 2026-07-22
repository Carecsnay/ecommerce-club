import { BsCart } from "react-icons/bs";
import React from "react";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const Header = () => {
    const IconeCarrinho = BsCart as React.ElementType;
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleSignUpClick = () => {
        navigate("/sign-up");
    };
    return (
        <HeaderContainer>
            <HeaderTitle
                onClick={() => {
                    handleHomeClick();
                }}
            >
                Club Clothing
            </HeaderTitle>
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
                    <HeaderItem
                        onClick={() => {
                            handleSignUpClick();
                        }}
                    >
                        <span>Criar conta</span>
                    </HeaderItem>
                    <HeaderItem
                        onClick={() => {
                            signOut(auth);
                        }}
                    >
                        <span>Logout</span>
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
