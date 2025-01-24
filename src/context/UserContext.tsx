import { createContext } from "react";

interface userContextProps {
    name?: string;
    setUser?: (user: string) => void;
    tema?: string;
    setTema?: (tema: string) => void;
  }
  

export const UserContext = createContext<userContextProps|undefined>(undefined);