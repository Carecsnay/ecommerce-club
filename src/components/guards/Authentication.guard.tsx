import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingComponent from "../loading/loading.component";

interface AuthenticationProps {
    children: ReactNode;
}

const AuthenticationGuard = ({ children }: AuthenticationProps) => {
    const { isAuthenticated } = useSelector((rootReducer: any) => {
        return rootReducer.userReducer;
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            const timer = setTimeout(() => {
                navigate("/login");
            }, 3000);

            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <LoadingComponent message="Você precisa estar logado para acessar essa página. Você será redirecionado para a página de login em instantes" />
        );
    }

    return <>{children}</>;
};

export default AuthenticationGuard;
