import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
function App() {
  return (
   <>
   <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<RegistrationPage/>} path="/registration"/>
      <Route element={<ProfilePage/>} path="/me"/>
      <Route element={<NotFoundPage/>} path="*"/>
   </Routes>
   </>
  )
}

export default App
