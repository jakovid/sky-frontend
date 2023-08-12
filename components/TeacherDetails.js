import { useTeachersContext } from "../hooks/useTeachersContext"
import { BsFillTrash3Fill } from 'react-icons/bs'

export default function TeacherDetails({ teacher }) {
    const { dispatch } = useTeachersContext()

    function countrySwitch(country) {
        switch(country) {
            case 'Taiwan':
                return "/images/tw.png";
            case 'USA':
                return "/images/use.png";
            case 'Canada':
                return "/images/cn.png";
            case 'UK':
                return "/images/uk.png";
            case 'Ireland':
                return "/images/ire.png";
            case 'New Zealand' :
                return "/images/nz.png";
            case 'Australia':
                return "/images/au.png";
            case 'South Africa':
                return "/images/sa.png";
            default:
                return '';
        }
      };

    const handleClick = () => {
        deleteImage();
        deleteTeacher();
    }

    const deleteImage = async () => {
        const response = await fetch ('http://localhost:4000/api/images/'+ teacher.img_id, {
            method: 'DELETE',
        });
        const json = await response.json();
        console.log(json);
    }

    const deleteTeacher = async () => {
        const response = await fetch('http://localhost:4000/api/teachers/' + teacher._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TEACHER', payload: json })
        }
    }

    return (
        <div className="bg-green-950 rounded-lg m-4 p-5 relative shadow-md flex items-center gap-8">
            <div>
                <img src={teacher.img_url} className="max-h-40 "/>
                <div className="flex gap-3 items-center h-6 w-40">
                    <h4 className="text-lg">{teacher.name}</h4>
                    <img className="h-4" src={countrySwitch(teacher.country)} />
                </div>
            </div>
            <p className="text-sm flex h-40 w-80 bg-white text-black p-2">{teacher.bio || "No Bio Available"}</p>
            <span onClick={handleClick} className="flex items-center justify-center absolute top-5 right-5 cursor-pointer p-1 border-red-900 border-2 rounded-full fill-red-900 hover:bg-red-900 hover:fill-white">
                <BsFillTrash3Fill fill="inherit" />
            </span>
        </div>
    )
}