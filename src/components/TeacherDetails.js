import { useTeachersContext } from "../hooks/useTeachersContext"
import { BsFillTrash3Fill } from 'react-icons/bs'
import TW from '../images/tw.png';
import USA from '../images/usa.png';
import CN from '../images/cn.png';

export default function TeacherDetails({ teacher }) {
    const { dispatch } = useTeachersContext()

    function countrySwitch(country) {
        switch(country) {
          case 'Taiwan':
            return TW;
        case 'USA':
            return USA;
        case 'Canada':
            return CN;
          default:
            return 'foo';
        }
      };

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
            <img src={countrySwitch(teacher.country)} />
            <p>{teacher.bio}</p>
            <span onClick={handleClick} ><BsFillTrash3Fill fill="inherit" /></span>
        </div>
    )
}