import { createContext, useReducer } from "react";

export const ContentsContext = createContext();

export const contentsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTENTS':
            return {
                contents: action.payload
            }
        case 'CREATE_CONTENT' :
            return {
                contents: [action.payload, ...state.contents]
            }
        case 'DELETE_CONTENT' :
            return {
                contents: state.contents.filter((t) => t._id !== action.payload._id )
            }
        default:
            return state
    }
}

export const ContentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contentsReducer, {
        content: null
    })
    
    return(
        <ContentsContext.Provider value={{...state, dispatch}}>
            { children }
        </ContentsContext.Provider >
    )
}