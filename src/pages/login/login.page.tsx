import { BsGoogle } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

import CustomButton from "../../components/custom-button/custom-button.component";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.style";
import CustomInput from "../../components/custom-input/custom-input.component";

const BSGoogle = BsGoogle as React.ElementType;
const FILogin = CiLogin as React.ElementType;

const LoginPage = () => {
    return (
        <>
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    <CustomButton name="Entrar com a conta google" icon={<BSGoogle size={22} />} />
                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder="Digite seu e-mail" />
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput placeholder="Digite sua senha" />
                    </LoginInputContainer>
                    <CustomButton name="Entrar" icon={<FILogin size={25} />} />
                </LoginContent>
            </LoginContainer>
        </>
    );
};

export default LoginPage;
