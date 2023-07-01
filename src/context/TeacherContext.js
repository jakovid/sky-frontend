import { createContext, useReducer } from "react";

export const TeachersContext = createContext();

export const teachersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEACHERS':
            return {
                teachers: action.payload
            }
        case 'CREATE_TEACHER' :
            return {
                teachers: [action.payload, ...state.teachers]
            }
        default:
            return state
    }
}

export const TeachersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(teachersReducer, {
        teachers: null
    })
    
    return(
        <TeachersContext.Provider value={{...state, dispatch}}>
            { children }
        </TeachersContext.Provider>
    )
}