import { useState } from "react";
import { useTeachersContext } from "../hooks/useTeachersContext";

export default function TeacherForm() {
    const { dispatch } = useTeachersContext()

    const token = localStorage.getItem('token');

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [img_url, setImgUrl] = useState('')
    const [img_id, setImgId] = useState('')
    const [order, setOrder] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const teacher = {name, country, bio, img_url, img_id, order}

        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/teachers`;

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(teacher),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
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
            setOrder('')
            dispatch({type: 'CREATE_TEACHER', payload: json})
        }
    }

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('image', image);

        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/images/upload`;

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });

        const data = await response.json();
        console.log(data);
        setImgUrl(data.url);
        setImgId(data.public_id)
      };

    return(
        <form onSubmit={handleSubmit} className="p-4">
            <h3>Add a New Teacher</h3>

            <label className="block">Teacher Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={"block text-black p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('name') ? "border-red-600" : "border-slate-800")}
            />

            <label className="block">Country:</label>
            <select 
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                className={"block text-black p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('country') ? "border-red-600" : "border-slate-800")}
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

            <label className="block">Teacher Bio:</label>
            <input 
                type="text"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                className="block text-black p-2 w-full mt-2 mb-4 border-slate-800 border-2 rounded-md box-border"
            />

            <label className="block">Teacher Order:</label>
            <input 
                type="number"
                onChange={(e) => setOrder(e.target.value)}
                value={order}
                className={"block text-black p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('order') ? "border-red-600" : "border-slate-800")}
            />

            <label className="block">Teacher Picture:</label>
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