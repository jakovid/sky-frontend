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
        case 'PATCH_CONTENT' :
            return {
                contents: state.contents.map((content) =>
                    content._id === action.payload._id ? {...content, ...action.payload } : content
                )
                
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