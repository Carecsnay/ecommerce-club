import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import LoadingComponent from "./components/loading/loading.component";
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./context/user.context";
import { userConverter } from "./converter/firestore.converter";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

function App() {
    const [isInitializing, setIsInitializing] = useState(true);
    const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                if (isAuthenticated) {
                    logoutUser();
                }
                setIsInitializing(false);
                return;
            }

            try {
                const querySnapshot = await getDocs(
                    query(collection(db, "users").withConverter(userConverter), where("id", "==", user.uid)),
                );
                const userFromFirestore = querySnapshot.docs[0]?.data();

                if (userFromFirestore) {
                    loginUser(userFromFirestore);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário no Firestore:", error);
            } finally {
                setIsInitializing(false);
            }
        });

        return () => unsubscribe();
    }, [isAuthenticated, loginUser, logoutUser]);

    // console.log("Status de autenticação:", isAuthenticated);

    if (isInitializing) return <LoadingComponent />;

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
