import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup";
import PassLogin from "./components/auth/PassLogin";
import PassSignup from "./components/auth/PassSignup";
import ForgotPassword from "./components/auth/ForgotPassword";
import Phone from "./components/auth/Phone";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/passlogin" element={<PassLogin />} />
      <Route path="/login/passlogin/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/passsignup" element={<PassSignup />} />
      <Route path="/signup/passsignup/phone" element={<Phone />} />
     </Routes>

    </BrowserRouter>
  )
}
