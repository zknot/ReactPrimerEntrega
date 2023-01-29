
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useLoginContext } from "../comp/Context/LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes"



const AppRouter = () => {

    const { user } = useLoginContext()

    return(
        <BrowserRouter>

      { user.logged
        ? <PrivateRoutes/>
        : <PublicRoutes/>
      }

      </BrowserRouter>
    )
}

export default AppRouter