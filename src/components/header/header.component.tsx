import { BsCart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux.hooks";
import { selectProductsCount } from "../../store/reducers/cart/cart-selectors";
import { toggleCart } from "../../store/toolkit/cart/cart.slice";
import { logoutUser } from "../../store/toolkit/user/user.slice";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style";

const Header = () => {
    const productsCount = useAppSelector(selectProductsCount);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated } = useAppSelector((rootReducer) => {
        return rootReducer.userReducer;
    });

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
        dispatch(logoutUser());
    };

    const handleToggleCartClick = () => {
        dispatch(toggleCart());
    };

    return (
        <HeaderContainer>
            <HeaderTitle onClick={handleHomeClick}>Club Clothing</HeaderTitle>
            <HeaderItems>
                <HeaderItem onClick={handleExploreClick}>
                    <span>Explorar</span>
                </HeaderItem>

                {!isAuthenticated && (
                    <>
                        <HeaderItem onClick={handleLoginClick}>
                            <span>Login</span>
                        </HeaderItem>
                        <HeaderItem onClick={handleSignUpClick}>
                            <span>Criar conta</span>
                        </HeaderItem>
                    </>
                )}

                {isAuthenticated && (
                    <HeaderItem onClick={handleSignOutClick}>
                        <span>Logout</span>
                    </HeaderItem>
                )}

                <HeaderItem onClick={handleToggleCartClick}>
                    <span>
                        <BsCart size={25} />
                    </span>
                    <span>
                        <p style={{ marginLeft: 5 }}>{productsCount}</p>
                    </span>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    );
};

export default Header;
