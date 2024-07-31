import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [state, setState] = useLocalStorage('auth', {});

    function setStateFunc(data) {
        if (data.token) {
            setState(data);
        } else {
            setState({});
            localStorage.removeItem('auth');
        }
    }

    const contextValues = {
        setStateFunc,
        isAuthenticated: !!state.token,
        userId: state._id
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};