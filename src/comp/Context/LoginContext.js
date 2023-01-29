import { createContext, useContext, useState } from "react";

const MOCK_USERS = [
    {
        email: 'zknot@hotmail.com',
        password: 'admin'
    },
    {
        email: 'prueba1@hotmail.com',
        password: 'prueba1'
    },
    {
        email: 'prueba2@hotmail.com',
        password: 'prueba2'
    },
]

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: 'zknot@hotmail.com',
        logged: true,
        error: null
    })

    console.log(user);

    const login = (values) => {
        const match = MOCK_USERS.find(user => user.email === values.email) 

        if (!match){
            setUser({
                email:null,
                logged: false,
                error: 'No se encuentra ese usuario'
            })
            return
        }

        if (match.password === values.password) {
            setUser({
                email: match.email,
                logged: true,
                error: null
            })
        } else {
            setUser({
                email: null,
                logged: false,
                error: "Password Incorrecto"
            })
        }

    }

    const logout = () => {
        setUser({
            email: '',
            logged: false,
            error: null
        })
    }

    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )

}