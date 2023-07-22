import { LanguageContext } from "../context/LanguageContext"
import { useContext } from 'react'

export const useLanguageContext = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw Error('useLanguageContext must be used inside a TeachersContextProvider')
    }

    return context
}