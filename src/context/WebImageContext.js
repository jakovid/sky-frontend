import { createContext, useReducer } from "react";

export const WebImagesContext = createContext();

export const webImagesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WEB_IMAGES':
            return {
                webImages: action.payload
            }
        case 'CREATE_WEB_IMAGE' :
            return {
                webImages: [action.payload, ...state.webImages]
            }
        case 'DELETE_WEB_IMAGE' :
            return {
                webImages: state.webImages.filter((w) => w._id !== action.payload._id )
            }
        case 'PATCH_WEB_IMAGE' :
            return {
                webImages: state.webImages.map((webImage) =>
                    webImage._id === action.payload._id ? {...webImage, ...action.payload } : webImage
                )
                
            }
        default:
            return state
    }
}

export const WebImagesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(webImagesReducer, {
        webImages: null
    })
    
    return(
        <WebImagesContext.Provider value={{...state, dispatch}}>
            { children }
        </WebImagesContext.Provider >
    )
}