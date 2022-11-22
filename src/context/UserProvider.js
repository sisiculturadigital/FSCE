import React, { useState, useContext, createContext } from "react";

const userContext = createContext();


export function useUserContext() {
    return useContext(userContext);
}


export function UserProvider(props) {
    
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [datosPersona, setDatosPersona] = useState(null);
    const [token, setToken] = useState(null);

    const logOut =()=>{
        setUser(null)
        setIsAuth(false)
    }
    
    const valor={user, setUser, logOut, isAuth, setIsAuth, datosPersona, setDatosPersona, token, setToken}

    return (
        <userContext.Provider value={valor}>
            {props.children}
        </userContext.Provider>
    );
}