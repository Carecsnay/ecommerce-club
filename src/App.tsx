import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

function App() {
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
