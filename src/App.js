import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup";
import PassLogin from "./components/auth/PassLogin";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/passlogin" element={<PassLogin />} />
      <Route path="/signup" element={<Signup />} />
     </Routes>

    </BrowserRouter>
  )
}
