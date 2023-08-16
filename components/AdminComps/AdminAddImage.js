import { useState, useEffect } from "react";
import { useWebImagesContext } from "../../hooks/useWebImagesContext.js";


// this is not in use, but it can be added to the code whenever new web images need to be added

export default function AdminAddImage() {
    const { webImages, dispatch } = useWebImagesContext()

    const token = localStorage.getItem('token');

    const [name, setName] = useState('')
    const [img_url, setImgUrl] = useState('')
    const [img_id, setImgId] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    

    useEffect(() => {
        const fetchWebImages= async() => {
            const response = await fetch('http://localhost:4000/api/web-images')
            const json = await response.json()

            if(response.ok) {
                dispatch({
                    type: 'SET_WEB_IMAGES',
                    payload: json
                })
            }
        }

        fetchWebImages()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const webImage = {name, img_url, img_id}

        const response = await fetch('http://localhost:4000/api/web-images', {
            method: 'POST',
            body: JSON.stringify(webImage),
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
            console.log('new web image added', json)
            setName('')
            setImgUrl('')
            setImgId('')
            dispatch({type: 'CREATE_WEB_IMAGE', payload: json})
        }
    }

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-red-900/90 flex flex-col items-center">
        <h3>Add a New Web Image</h3>

        <label className="block">Web Image Name:</label>
        <input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border border-slate-800"}
        />
        <label className="block">Web Url:</label>
        <input 
            type="text"
            onChange={(e) => setImgUrl(e.target.value)}
            value={img_url}
            className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border border-slate-800"}
        />
              

        <button className="bg-green-950 border-none text-white p-2 rounded-s-full rounded-e-full cursor-pointer">Add Image</button>
        { error && <div className="p-3 border-2 text-red-600 border-red-600 bg-red-200 rounded-md my-5">{error}</div>}
    </form>

    )
}