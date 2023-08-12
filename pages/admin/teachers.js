import { useEffect } from "react"
import { useTeachersContext } from '@/hooks/useTeachersContext'

// components
import TeacherDetails from "@/components/TeacherDetails"
import TeacherForm from "@/components/TeacherForm"
import AdminNavbar from "@/components/AdminNavbar"

export default function AdminTeachers() {
    const { teachers, dispatch } = useTeachersContext()
    

    useEffect(() => {
        const fetchTeachers = async() => {
            const response = await fetch('http://localhost:4000/api/teachers')
            const json = await response.json()

            if(response.ok) {
                dispatch({
                    type: 'SET_TEACHERS',
                    payload: json
                })
            }
        }

        fetchTeachers()
    }, [])

    return(
        <div>
            <AdminNavbar />
            <div className="w-full bg-red-900/90 flex flex-row justify-center items-center">
                <div className="w-2/3 grid grid-cols-3 gap-24">
                    <div className="col-span-2">
                        {teachers && teachers.map((teacher) => (
                            <TeacherDetails key={teacher._id} teacher={teacher} />
                        ))}
                    </div>

                    <TeacherForm />
                </div>
            </div>
        </div>
    )
}