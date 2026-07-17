import { BsGoogle } from "react-icons/bs";
import CustomButton from "../../components/custom-button/custom-button.component";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.style";

const BSGoogle = BsGoogle as React.ElementType;

const LoginPage = () => {
    return (
        <div>
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    <CustomButton name="Entrar com o google" icon={<BSGoogle size={25} />} />
                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
                    <LoginInputContainer>{/* email input */}</LoginInputContainer>
                    <LoginInputContainer>{/* password input */}</LoginInputContainer>
                    {/* button */}
                </LoginContent>
            </LoginContainer>
        </div>
    );
};

export default LoginPage;
