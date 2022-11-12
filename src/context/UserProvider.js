import React, { useState, useContext, createContext } from "react";

const userContext = createContext();


export function useUserContext() {
    return useContext(userContext);
}


export function UserProvider(props) {
console.log(props)
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const logOut =()=>{
        setUser(null)
        setIsAuth(false)
    }
    
    const valor={user, setUser, logOut, isAuth, setIsAuth}

    return (
        <userContext.Provider value={valor}>
            {props.children}
        </userContext.Provider>
    );
}