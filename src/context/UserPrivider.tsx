import { useState } from "react";
import {UserContext} from "./UserContext"

export const UserProvider = ({children}: {
    children: React.ReactNode;
  }) => {
    const [name, setUser] = useState("");
    const [tema, setTema] = useState("");

    return(
        <UserContext.Provider value={{name, setUser, tema, setTema}}>
            {children}
        </UserContext.Provider>
    )

}