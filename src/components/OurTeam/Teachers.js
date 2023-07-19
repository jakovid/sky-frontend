import { useEffect } from "react"
import { useTeachersContext } from '../../hooks/useTeachersContext'

// components
import DisplayTeacher from "./DisplayTeacher"

export default function BuildTeachers() {
    const { teachers, dispatch } = useTeachersContext()
    

    useEffect(() => {
        const fetchTeachers = async() => {
            const response = await fetch('/api/teachers')
            const json = await response.json()
            
            if(response.ok) {
                dispatch({
                    type: 'SET_TEACHERS',
                    payload: json
                })
            }
            console.log(teachers)
        }

        fetchTeachers()
    }, [])

    return (
        <div>
            hi
            <div>
            {teachers && teachers.map((teacher) => {
                <DisplayTeacher key={teacher._id} teacher={teacher} />
            })}
            </div>
        </div>
    )
}