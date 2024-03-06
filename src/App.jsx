import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoutes";
function App() {
  return (
   <>
   <Routes>
    <Route element={<PrivateRoutes/>}>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<ProfilePage/>} path="/me"/>
    </Route>
      <Route element={<Login/>} path="/login"/>
      <Route element={<RegistrationPage/>} path="/registration"/>
      <Route element={<NotFoundPage/>} path="*"/>
   </Routes>
   </>
  )
}

export default App
