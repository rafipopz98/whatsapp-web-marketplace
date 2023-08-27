import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || {};
        console.log("*&*&*&*&***&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*",user);
        setAuth(user);
    }, [])
    return (
        <AuthContext.Provider value={({auth, setAuth})}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext