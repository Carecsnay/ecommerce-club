import { BsGoogle } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.style";

import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";

import { useForm } from "react-hook-form";
import InputErrorMessage from "../../components/input-error-message/input.error.message";
import { isEmail } from "validator";
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";

interface LoginPageForm {
    email: string;
    password: string;
}

const BSGoogle = BsGoogle as React.ElementType;
const FILogin = CiLogin as React.ElementType;

const LoginPage = () => {
    const {
        register,
        formState: { errors },
        setError,
        handleSubmit,
    } = useForm<LoginPageForm>();

    //o handle submit só chama a função de baixo caso todos os campos sejam validados corretamente.
    const handleSubmitPress = async (data: LoginPageForm) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log({ userCredentials });
        } catch (error) {
            const _error = error as AuthError;

            if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
                setError("email", { type: "invalidCredentials" });
                return setError("password", { type: "invalidCredentials" });
            }

            console.log(error);
        }
    };

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
                            hasError={!!errors.email}
                            placeholder="Digite seu e-mail"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: (value) => {
                                    return isEmail(value);
                                },
                            })}
                        />

                        {errors?.email?.type === "required" && (
                            <InputErrorMessage>O email é obrigatório.</InputErrorMessage>
                        )}

                        {errors?.email?.type === "validate" && (
                            <InputErrorMessage>Digite um e-mail válido (ex: nome@email.com).</InputErrorMessage>
                        )}

                        {errors?.email?.type === "invalidCredentials" && (
                            <InputErrorMessage>E-mail ou senha incorretos.</InputErrorMessage>
                        )}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            placeholder="Digite sua senha"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        {errors?.password?.type === "required" && (
                            <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
                        )}

                        {errors?.password?.type === "invalidCredentials" && (
                            <InputErrorMessage>E-mail ou senha incorretos.</InputErrorMessage>
                        )}
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
