import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";

import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.style";

import { FiLogIn } from "react-icons/fi";

import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import InputErrorMessage from "../../components/input-error-message/input.error.message";

interface SignUpPageForm {
    name: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const SignUpPage = () => {
    const FILogin = FiLogIn as React.ElementType;
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignUpPageForm>();

    const handleSubmitPress = (data: any) => {
        console.log({ data });
    };
    return (
        <>
            <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadline>Crie sua conta</SignUpHeadline>
                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput placeholder="Digite seu nome" {...register("name", { required: true })} />
                        {errors?.name?.type === "required" && <InputErrorMessage> Digite um nome.</InputErrorMessage>}
                    </SignUpInputContainer>
                    <SignUpInputContainer>
                        <p>Sobrenome</p>
                        <CustomInput placeholder="Digite seu sobrenome" {...register("lastName", { required: true })} />
                        {errors?.lastName?.type === "required" && (
                            <InputErrorMessage> Digite um sobrenome.</InputErrorMessage>
                        )}
                    </SignUpInputContainer>
                    <SignUpInputContainer>
                        <p>Email</p>
                        <CustomInput
                            placeholder="Digite seu e-mail"
                            {...register("email", {
                                required: true,
                                validate: (value) => {
                                    return isEmail(value);
                                },
                            })}
                        />{" "}
                        {errors?.email?.type === "required" && (
                            <InputErrorMessage> O email é obrigatório.</InputErrorMessage>
                        )}
                        {errors?.email?.type === "validate" && (
                            <InputErrorMessage>Digite um e-mail válido (ex: nome@email.com).</InputErrorMessage>
                        )}
                    </SignUpInputContainer>
                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            placeholder="Digite sua senha"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        {errors?.password?.type === "required" && (
                            <InputErrorMessage> A senha é obrigatória.</InputErrorMessage>
                        )}
                    </SignUpInputContainer>
                    <SignUpInputContainer>
                        <p>Confirmação de senha</p>
                        <CustomInput
                            placeholder="Digite novamente sua senha"
                            type="password"
                            {...register("passwordConfirmation", { required: true })}
                        />
                        {errors?.passwordConfirmation?.type === "required" && (
                            <InputErrorMessage> A senha é obrigatória.</InputErrorMessage>
                        )}
                    </SignUpInputContainer>
                    <CustomButton
                        name="Criar conta"
                        icon={<FILogin size={25} />}
                        onClick={() => {
                            handleSubmit(handleSubmitPress)();
                        }}
                    />
                </SignUpContent>
            </SignUpContainer>
        </>
    );
};

export default SignUpPage;
