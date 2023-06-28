import { useTeachersContext } from "../../../hooks/useTeachersContext";
import Tawain from "../../../images/TWflag"

export default function TeacherDetails({ teacher }) {
    const { dispatch } = useTeachersContext();

    return (
        <div className="teacher-details">
            <img src={teacher.img} />
            <h4>{teacher.name}</h4>
            {/* {   //Check country to display correct flag
                (teacher.country === "Taiwan")
                    ? <img src="../../../images/TWflag" />
                    : 
            } */}
        </div>
    )
}