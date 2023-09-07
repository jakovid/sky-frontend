import { useEffect } from "react"
import { useTeachersContext } from '@/hooks/useTeachersContext'
import Head from "next/head"

// components
import TeacherDetails from "@/components/TeacherDetails"
import TeacherForm from "@/components/TeacherForm"
import AdminNavbar from "@/components/AdminNavbar"
import withAuth from '@/components/withAuth'

function AdminTeachers() {
    const { teachers, dispatch } = useTeachersContext()
    

    useEffect(() => {
        const fetchTeachers = async() => {
            const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/teachers`;
            const response = await fetch(API_ENDPOINT)
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
            <Head>
                <title>Sky Education | Manage Teachers</title>
            </Head>
            <div className='bg-red-900 flex sm:hidden w-screen h-screen justify-center items-center text-2xl text-center p-8'>
                Please switch to desktop to edit the website.
            </div>
            <div className="hidden sm:flex flex-col w-screen">
                <AdminNavbar />
                <div className="w-full bg-red-900/90 flex flex-row justify-center items-center">
                    <div className=" xl:w-2/3 grid grid-cols-3 xl:gap-24">
                        <div className="col-span-2">
                            {teachers && teachers.map((teacher) => (
                                <TeacherDetails key={teacher._id} teacher={teacher} />
                            ))}
                        </div>

                        <TeacherForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(AdminTeachers)