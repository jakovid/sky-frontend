import { useEffect } from "react"
import { useTeachersContext } from "../../hooks/useTeachersContext"
import BuildTeacher from "./BuildTeacher"


export default function DisplayTeachers() {
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
        }

        fetchTeachers()
    }, [])

    return(
        <div className="bg-green-950/90 flex flex-col items-center justify-center p-10 xl:px-0 xl:py-10">
            <div className="bg-green-950 p-2 flex flex-wrap md:w-4/6 lg:w-5/6 xl:w-4/6 max-w-6xl justify-center gap-10 border-8 border-red-900 rounded-xl">
                {teachers && teachers.map((teacher) => (
                        <BuildTeacher key={teacher._id} teacher={teacher} />
                ))}
            </div>
        </div>
    )
}