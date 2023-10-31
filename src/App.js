import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Login from "./components/auth/Login"

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
     </Routes>
    </BrowserRouter>
  )
}
