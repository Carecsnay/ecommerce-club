import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";

import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import InputErrorMessage from "../../components/input-error-message/input.error.message";
import { auth, db, googleProvider } from "../../config/firebase.config";
import { UserContext } from "../../context/user.context";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.style";

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

    const { isAuthenticated } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

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

    const handleSignInWithGooglePress = async () => {
        try {
            const userCredentials = await signInWithPopup(auth, googleProvider);

            const querySnapshot = await getDocs(
                query(collection(db, "users"), where("id", "==", userCredentials.user.uid)),
            );

            const user = querySnapshot.docs[0]?.data();

            if (!user) {
                const firstName = userCredentials.user.displayName?.split(" ")[0];
                const lastName = userCredentials.user.displayName?.split(" ")[1];

                await addDoc(collection(db, "users"), {
                    id: userCredentials.user.uid,
                    email: userCredentials.user.email,
                    firstName,
                    lastName,
                    provider: "google",
                });
            }
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    <CustomButton
                        name="Entrar com a conta google"
                        icon={<BSGoogle size={22} />}
                        onClick={() => {
                            handleSignInWithGooglePress();
                        }}
                    />
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
