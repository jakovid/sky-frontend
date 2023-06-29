export default function TeacherDetails({ teacher }) {
    return (
        <div className="teacher-details">
            <img src={teacher.img} className="teacher-img"/>
            <h4>{teacher.name}</h4>
            <p>{teacher.country}</p>
            <p>{teacher.bio}</p>
        </div>
    )
}