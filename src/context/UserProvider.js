import React, { useState, useContext, createContext } from "react";

const userContext = createContext();


export function useUserContext() {
    return useContext(userContext);
}


export function UserProvider(props) {

    const [user, setUser] = useState(18);
    let numero = 18

    const valor={user, setUser, numero}

    return (
        <userContext.Provider value={valor}>
            {props.children}
        </userContext.Provider>
    );
}