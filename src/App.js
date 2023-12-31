import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import PassLogin from "./components/authentication/PassLogin";
import PassSignup from "./components/authentication/PassSignup";
import ForgotPassword from "./components/authentication/ForgotPassword";
import Phone from "./components/authentication/Phone";
import ChatBot from "./components/pages/ChatBot";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/config/firebase";

export default function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/chatbot" element={<ChatBot />} />
        ) : (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/passlogin" element={<PassLogin />} />
            <Route path="/login/passlogin/forgotpassword" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/passsignup" element={<PassSignup />} />
            <Route path="/signup/passsignup/phone" element={<Phone />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
