import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./components/cart/cart.component";
import AuthenticationGuard from "./components/guards/Authentication.guard";
import Header from "./components/header/header.component";
import LoadingComponent from "./components/loading/loading.component";
import { auth, db } from "./config/firebase.config";
import { userConverter } from "./converter/firestore.converter";
import { useAppSelector } from "./hooks/redux.hooks";
import CategoriesDetailsPage from "./pages/categories-details/categories-details.page";
import CheckoutPage from "./pages/checkout/checkout.page";
import ExplorePage from "./pages/explore/explore.page";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import PaymentConfirmationPage from "./pages/payment-confirmation/payment-confirmation.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import { loginUser, logoutUser } from "./store/toolkit/user/user.slice";

function App() {
    const [isInitializing, setIsInitializing] = useState(true);
    const dispatch = useDispatch();

    const { isAuthenticated } = useAppSelector((rootReducer) => {
        return rootReducer.userReducer;
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                if (isAuthenticated) {
                    dispatch(logoutUser());
                }
                setIsInitializing(false);
                return;
            }

            try {
                const querySnapshot = await getDocs(
                    query(collection(db, "users").withConverter(userConverter), where("id", "==", user.uid)),
                );
                const userFromFirestore = querySnapshot.docs[0]?.data();

                dispatch(loginUser(userFromFirestore));
            } catch (error) {
                console.error("Erro ao buscar dados do usuário no Firestore:", error);
            } finally {
                setIsInitializing(false);
            }
        });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    if (isInitializing) return <LoadingComponent />;

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:id" element={<CategoriesDetailsPage />} />
                <Route
                    path="/checkout"
                    element={
                        <AuthenticationGuard>
                            <CheckoutPage />
                        </AuthenticationGuard>
                    }
                />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
            <Cart />
        </BrowserRouter>
    );
}

export default App;
