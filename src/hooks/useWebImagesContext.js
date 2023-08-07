import { WebImagesContext } from '../context/WebImageContext'
import { useContext } from 'react'

export const useWebImagesContext= () => {
    const context = useContext(WebImagesContext)

    if (!context) {
        throw Error('useWebImagesContext must be used inside a WebImagesContextProvider')
    }

    return context
}