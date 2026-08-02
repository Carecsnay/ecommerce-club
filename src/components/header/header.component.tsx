import { signOut } from "firebase/auth";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase.config";
import { CartContext } from "../../context/cart.context";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector((rootReducer: any) => {
        return rootReducer.userReducer;
    });

    const { toggleCart } = useContext(CartContext);

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleSignUpClick = () => {
        navigate("/sign-up");
    };

    const handleExploreClick = () => {
        navigate("/explore");
    };

    const handleSignOutClick = async () => {
        dispatch({ type: "LOGOUT_USER" });
    };

    const { productsCount } = useContext(CartContext);

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
                    <HeaderItem
                        onClick={() => {
                            handleExploreClick();
                        }}
                    >
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
                                handleSignOutClick();
                            }}
                        >
                            <span>Logout</span>
                        </HeaderItem>
                    )}
                    <HeaderItem onClick={toggleCart}>
                        <span>
                            <BsCart size={25} />
                        </span>
                        <span>
                            <p style={{ marginLeft: 5 }}>{productsCount}</p>
                        </span>
                    </HeaderItem>
                </HeaderItems>
            </HeaderItem>
        </HeaderContainer>
    );
};

export default Header;
