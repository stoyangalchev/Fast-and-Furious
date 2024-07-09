import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [state, setState] = useLocalStorage('auth', {});

    function setStateFunc(data) {

        if (data.token) {
            setState(data)
        } else {
            setState({})
            localStorage.removeItem('auth')
        }
    }


    const contextValues = {
        setStateFunc,
        isAuthenticated: !!state.token,
        userId: state._id
    }
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}