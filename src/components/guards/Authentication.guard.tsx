import { ReactNode, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import LoadingComponent from "../loading/loading.component";

interface AuthenticationProps {
    children: ReactNode;
}

const AuthenticationGuard = ({ children }: AuthenticationProps) => {
    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            const timer = setTimeout(() => {
                navigate("/login");
            }, 3000);

            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isAuthenticated) {
        return (
            <LoadingComponent message="Você precisa estar logado para acessar essa página. Você será redirecionado para a página de login em instantes" />
        );
    }

    return <>{children}</>;
};

export default AuthenticationGuard;
