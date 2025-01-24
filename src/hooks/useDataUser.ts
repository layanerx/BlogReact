import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useDataUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useDataUser must be used within a UserProvider");
    }
    return context;
 }