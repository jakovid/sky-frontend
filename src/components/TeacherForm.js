import { useState } from "react";
import { useTeachersContext } from "../hooks/useTeachersContext";

export default function TeacherForm() {
    const { dispatch } = useTeachersContext()

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [img, setImg] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const teacher = {name, country, bio, img}

        const response = await fetch('/api/teachers', {
            method: 'POST',
            body: JSON.stringify(teacher),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null)
            setEmptyFields([])
            console.log('new teacher add', json)
            setName('')
            setCountry('')
            setBio('')
            setImg('')
            dispatch({type: 'CREATE_TEACHER', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Teacher</h3>

            <label>Teacher Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? "error" : ""}
            />

            <label>Country:</label>
            <select 
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                className={emptyFields.includes('country') ? "error" : ""}
            >
                <option value="">--Select a Country</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Ireland">Ireland</option>
                <option value="Australia">Australia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="South Africa">South Africa</option>
            </select>

            <label>Teacher Bio:</label>
            <input 
                type="text"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
            />

            <label>Teacher Picture:</label>
            <input 
                type="text"
                onChange={(e) => setImg(e.target.value)}
                value={img}
                className={emptyFields.includes('img') ? "error" : ""}
            />

            <button>Add Teacher</button>
            { error && <div className="error">{error}</div>}
        </form>
    )
    
}