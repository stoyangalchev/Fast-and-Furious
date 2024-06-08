import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
    
        if(persistedState){
            const newState = JSON.parse(persistedState);
            return newState;
        }
        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state,
        setLocalStorageState
    ]
};