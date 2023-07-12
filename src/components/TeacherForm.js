import { useState } from "react";
import { useTeachersContext } from "../hooks/useTeachersContext";
import Axios from 'axios';

export default function TeacherForm() {
    const { dispatch } = useTeachersContext()

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [img_url, setImgUrl] = useState('')
    const [img_id, setImgId] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const teacher = {name, country, bio, img_url, img_id}

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
            setImgUrl('')
            setImgId('')
            dispatch({type: 'CREATE_TEACHER', payload: json})
        }
    }

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('image', image);

        const response = await fetch('/api/images/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log(data);
        setImgUrl(data.url);
        setImgId(data.public_id)
      };

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
            <img src={img_url} alt="" />
            <input 
                type="file"
                onChange={(e) => uploadImage(e.target.files[0])}
                className={emptyFields.includes('img_url') ? "error" : ""}
            />

            <button>Add Teacher</button>
            { error && <div className="error">{error}</div>}
        </form>
    )
    
}