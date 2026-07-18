import { BsGoogle } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.style";

import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";

import { useForm } from "react-hook-form";
const BSGoogle = BsGoogle as React.ElementType;
const FILogin = CiLogin as React.ElementType;

const LoginPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    //o handle submit só chama a função de baixo caso todos os campos sejam validados corretamente.
    const handleSubmitPress = (data: any) => {
        console.log({data});
    };

    console.log(errors);

    return (
        <>
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    <CustomButton name="Entrar com a conta google" icon={<BSGoogle size={22} />} />
                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput
                            hasError={!!errors?.email} //!! converte em boolean
                            placeholder="Digite seu e-mail"
                            {...register("email", { required: true })}
                        />
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            placeholder="Digite sua senha"
                            {...register("password", { required: true, minLength: 8 })}
                        />
                    </LoginInputContainer>
                    <CustomButton
                        name="Entrar"
                        icon={<FILogin size={25} />}
                        onClick={() => {
                            handleSubmit(handleSubmitPress)();
                        }}
                    />
                </LoginContent>
            </LoginContainer>
        </>
    );
};

export default LoginPage;
