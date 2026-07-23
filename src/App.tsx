import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

import "./App.css";

import { auth, db } from "./config/firebase.config";
import { UserContext } from "./context/user.context";
import { collection, getDocs, query, where } from "firebase/firestore";

function App() {
    const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

    onAuthStateChanged(auth, async (user) => {
        const SigningOut = isAuthenticated && !user;
        if (SigningOut) {
            return logoutUser();
        }

        const querySnapshot = await getDocs(query(collection(db, "users"), where("id", "==", user?.uid)));
        const userFromFirestore = querySnapshot.docs[0]?.data();

        const SigningIn = !isAuthenticated && user;
        if (SigningIn) {
            return loginUser(userFromFirestore as any);
        }
    });
    console.log(isAuthenticated);
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
