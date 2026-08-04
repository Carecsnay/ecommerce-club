import { useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineHome } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { clearCartProducts } from "../../store/reducers/cart/cart-actions";
import Colors from "../../theme/theme.colors";
import CustomButton from "../custom-button/custom-button.component";
import { PaymentConfirmationContainer, PaymentConfirmationContent } from "./payment-confirmation.style";

const PaymentConfirmation = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const status = searchParams.get("success");
    const isCanceled = searchParams.get("canceled");
    const dispatch = useDispatch();

    const handleGotoHomePageClick = () => {
        navigate("/");
    };

    useEffect(() => {
        if (status === "true") {
            dispatch(clearCartProducts());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);
    return (
        <>
            <PaymentConfirmationContainer>
                <PaymentConfirmationContent>
                    {status === "true" && (
                        <>
                            <AiOutlineCheckCircle size={120} color={Colors.success} />
                            <p>Sua compra foi finalizada com sucesso.</p>
                        </>
                    )}
                    <>
                        {(status === "false" || isCanceled) && (
                            <>
                                <AiOutlineCloseCircle size={120} color={Colors.error} />
                                <p>Ocorreu um erro ao finalizar a sua compra. Por favor, tente novamente.</p>
                            </>
                        )}
                    </>

                    <CustomButton
                        icon={<AiOutlineHome size={20} />}
                        onClick={handleGotoHomePageClick}
                        name="Ir para página inicial"
                    />
                </PaymentConfirmationContent>
            </PaymentConfirmationContainer>
        </>
    );
};

export default PaymentConfirmation;
