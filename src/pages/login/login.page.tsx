import { BsGoogle } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

import CustomButton from "../../components/custom-button/custom-button.component";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.style";

const BSGoogle = BsGoogle as React.ElementType;
const FILogin = CiLogin as React.ElementType;

const LoginPage = () => {
    return (
        <div>
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    <CustomButton name="Entrar com a conta google" icon={<BSGoogle size={22} />} />
                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
                    <LoginInputContainer>{/* email input */}</LoginInputContainer>
                    <LoginInputContainer>{/* password input */}</LoginInputContainer>
                    <CustomButton name="Entrar" icon={<FILogin size={25} />} />
                </LoginContent>
            </LoginContainer>
        </div>
    );
};

export default LoginPage;
