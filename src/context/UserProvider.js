import React, { useState, useContext, createContext } from "react";

const userContext = createContext();


export function useUserContext() {
    return useContext(userContext);
}


export function UserProvider(props) {

    const [user, setUser] = useState(null);

    const logOut =()=>{
        setUser(null)
    }
    
    const valor={user, setUser, logOut}

    return (
        <userContext.Provider value={valor}>
            {props.children}
        </userContext.Provider>
    );
}