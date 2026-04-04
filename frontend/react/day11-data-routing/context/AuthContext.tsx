import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { RegisterData } from "../components/Register";
import type { LoginData } from "../components/Login";

type AuthContext = {
    registeredUser: RegisterData[];
    setRegisteredUsers: Dispatch<SetStateAction<RegisterData[]>>;
    loggedInUser?: LoginData;
    setLoggedInUser: Dispatch<SetStateAction<LoginData | undefined>>;
};

const Auth = createContext<AuthContext | null>(null);

export const useAuth = () => {
    const context = useContext(Auth);
    if (!context) {
        throw new Error("useAuth must be within AuthProvider context");
    }

    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [registeredUser, setRegisteredUsers] = useState<RegisterData[]>([]);
    const [loggedInUser, setLoggedInUser] = useState<LoginData>();

    return (
        <Auth.Provider
            value={{
                registeredUser,
                setRegisteredUsers,
                loggedInUser,
                setLoggedInUser,
            }}
        >
            {children}
        </Auth.Provider>
    );
};
