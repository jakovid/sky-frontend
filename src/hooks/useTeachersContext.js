import { TeachersContext } from '../context/TeacherContext'
import { useContext } from 'react'

export const useTeachersContext = () => {
    const context = useContext(TeachersContext)

    if (!context) {
        throw Error('useTeachersContext must be used inside a TeachersContextProvider')
    }

    return context
}