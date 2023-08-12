import { useState } from "react";
import { useTeachersContext } from "../hooks/useTeachersContext";

export default function TeacherForm() {
    const { dispatch } = useTeachersContext()

    const [name, setName] = useState('')
    const [img_url, setImgUrl] = useState('')
    const [img_id, setImgId] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const teacher = {name, country, bio, img_url, img_id, order}

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
        <form onSubmit={handleSubmit} className="p-4">
            <h3>Add a New Teacher</h3>

            <label className="block">Image Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('name') ? "border-red-600" : "border-slate-800")}
            />

            <label className="block">Webpage Picture:</label>
            <img src={img_url} alt="" />
            <input 
                type="file"
                onChange={(e) => uploadImage(e.target.files[0])}
                className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('img_url') ? "border-red-600" : "border-slate-800")}
            />

            <button className="bg-green-950 border-none text-white p-2 rounded-s-full rounded-e-full cursor-pointer">Add Teacher</button>
            { error && <div className="p-3 border-2 text-red-600 border-red-600 bg-red-200 rounded-md my-5">{error}</div>}
        </form>
    )
    
}