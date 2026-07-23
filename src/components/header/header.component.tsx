import { BsCart } from "react-icons/bs";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style";

import { auth } from "../../config/firebase.config";
import { UserContext } from "../../context/user.context";

const Header = () => {
    const IconeCarrinho = BsCart as React.ElementType;
    const navigate = useNavigate();

    const { isAuthenticated } = useContext(UserContext);

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
                    {!isAuthenticated && (
                        <>
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
                        </>
                    )}
                    {isAuthenticated && (
                        <HeaderItem
                            onClick={() => {
                                signOut(auth);
                            }}
                        >
                            <span>Logout</span>
                        </HeaderItem>
                    )}
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
