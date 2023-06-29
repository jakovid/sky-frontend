import { useEffect, useState } from "react"

// components
import TeacherDetails from "../components/TeacherDetails"

export default function Admin() {
    const [teachers, setTeachers] = useState(null)

    useEffect(() => {
        const fetchTeachers = async() => {
            const response = await fetch('/api/teachers')
            const json = await response.json()

            if(response.ok) {
                setTeachers(json)
            }
        }

        fetchTeachers()
    }, [])

    return(
        <div className="admin">
            <div className="teachers">
                {teachers && teachers.map((teacher) => (
                    <TeacherDetails key={teacher._id} teacher={teacher} />
                ))}
            </div>
        </div>
    )
}