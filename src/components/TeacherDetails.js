import { useTeachersContext } from "../hooks/useTeachersContext"
import { BsFillTrash3Fill } from 'react-icons/bs'
import TW from '../images/tw.png';
import USA from '../images/usa.png';
import CN from '../images/cn.png';
import UK from '../images/uk.png';
import IRE from '../images/ire.png';
import NZ from '../images/nz.png';
import AU from '../images/au.png'
import SA from '../images/sa.png'

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
            case 'UK':
                return UK;
            case 'Ireland':
                return IRE;
            case 'New Zealand' :
                return NZ;
            case 'Australia':
                return AU;
            case 'South Africa':
                return SA;
            default:
                return '';
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
            <h2>Teacher:</h2>
            <img src={teacher.img} className="teacher-img"/>
            <div>
                <h4>{teacher.name}</h4>
                <img className="teacher-flag" src={countrySwitch(teacher.country)} />
            </div>
            <p>{teacher.bio}</p>
            <span onClick={handleClick} ><BsFillTrash3Fill fill="inherit" /></span>
        </div>
    )
}