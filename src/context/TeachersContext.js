import { createContext, useReducer } from "react";

export const TeachersContext = createContext();

export const teachersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEACHERS':
            return {
                teachers: action.payload
            }
        case 'CREATE_TEACHER':
            return {
                teachers: [action.payload, ...state.teachers]
            }
        case 'DELETE_TEACHER':
            return {
                teachers: state.teachers.filter((t) => t._id != action.paylod._id)
            }
        default:
            return state
    }
}

export default function TeachersContextProvider({ children }) {
    const [state, dispatch] = useReducer(teachersReducer, {
        teachers: null
    })

    return(
        <TeachersContext.Provider value={{...state, dispatch}}>
            { children }
        </TeachersContext.Provider>
    )
}