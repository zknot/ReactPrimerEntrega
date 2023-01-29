import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../comp/LoginScreen/LoginScreen";


const PublicRoutes = () => {
    return(
        
        <Routes>
            <Route path="/login" element= { <LoginScreen/> } />
            <Route path="*" element={ <Navigate to="/login"/> } />
          </Routes>
        


    )
}

export default PublicRoutes