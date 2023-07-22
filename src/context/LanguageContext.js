import { createContext, useReducer } from "react";

export const LanguageContext = createContext();

export const languageReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                language: action.payload
            }
        default:
            return state
    }
}

export const LanguageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(languageReducer, {
        language: "English"
    })
    
    return(
        <LanguageContext.Provider value={{...state, dispatch}}>
            { children }
        </LanguageContext.Provider >
    )
}