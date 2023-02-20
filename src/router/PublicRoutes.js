import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../comp/LoginScreen/LoginScreen";
import AuthScreen from "../comp/AuthScreen/AuthScreen";

const PublicRoutes = () => {
    return(
        
        <Routes>
            <Route path="/login" element= { <LoginScreen/> } />
            <Route path="/auth" element= { <AuthScreen/> } />
            <Route path="*" element={ <Navigate to="/login"/> } />
          </Routes>
        


    )
}

export default PublicRoutes