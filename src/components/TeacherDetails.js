import { useTeachersContext } from "../hooks/useTeachersContext"
import { BsFillTrash3Fill } from 'react-icons/bs'

export default function TeacherDetails({ teacher }) {
    const { dispatch } = useTeachersContext()

    const handleClick = async () => {
        const response = await fetch('/api/teachers/' + teacher._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TEACHER', payload: json })
        }
    }

    return (
        <div className="teacher-details">
            <img src={teacher.img} className="teacher-img"/>
            <h4>{teacher.name}</h4>
            <p>{teacher.country}</p>
            <p>{teacher.bio}</p>
            <span onClick={handleClick} ><BsFillTrash3Fill fill="inherit" /></span>
        </div>
    )
}