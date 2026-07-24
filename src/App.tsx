import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react"; // 1. Importamos o useEffect
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

import "./App.css";

import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./context/user.context";

function App() {
    const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                if (isAuthenticated) {
                    logoutUser();
                }
                return;
            }

            try {
                const querySnapshot = await getDocs(query(collection(db, "users"), where("id", "==", user.uid)));

                const userFromFirestore = querySnapshot.docs[0]?.data();

                if (!isAuthenticated && userFromFirestore) {
                    loginUser(userFromFirestore as any);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário no Firestore:", error);
            }
        });

        // Função de limpeza (cancela o listener quando o componente desmonta)
        return () => unsubscribe();
    }, [isAuthenticated, loginUser, logoutUser]);

    console.log("Status de autenticação:", isAuthenticated);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
