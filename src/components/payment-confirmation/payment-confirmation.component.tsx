import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

import Colors from "../../theme/theme.colors";
import CustomButton from "../custom-button/custom-button.component";
import { PaymentConfirmationContainer, PaymentConfirmationContent } from "./payment-confirmation.style";

const PaymentConfirmation = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get("sucess");
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
                        {status === "false" && (
                            <>
                                <AiOutlineCloseCircle size={120} color={Colors.error} />
                                <p>Ocorreu um erro ao finalizar a sua compra. Por favor, tente novamente.</p>
                            </>
                        )}
                    </>

                    <CustomButton name="Ir para página inicial" />
                </PaymentConfirmationContent>
            </PaymentConfirmationContainer>
        </>
    );
};

export default PaymentConfirmation;
