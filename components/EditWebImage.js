import { useState } from "react";
import { useWebImagesContext } from "../hooks/useWebImagesContext";

export default function EditWebImage({ image }){
    const { dispatch } = useWebImagesContext();

    const token = localStorage.getItem('token');

    const [img_url, setImgUrl] = useState('');
    const [img_id, setImgId] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('image', image);

        const response = await fetch('http://localhost:4000/api/images/upload', {
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

    const updateWebImage = async (e) => {
        // I can't figure out how to re-render without reloading the webpage
        // e.preventDefault()

        const response = await fetch('http://localhost:4000/api/web-images/' + image._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ img_url, img_id })
        })
        const json = await response.json()
        console.log('updating')

        if (response.ok) {
            sendDispatch(json);
            deleteImage();
        }
    }

    const sendDispatch = (json) => {
        dispatch({ type: 'PATCH_WEB_IMAGE', payload: json })
    }

    const deleteImage = async () => {
        const response = await fetch ('http://localhost:4000/api/images/'+ image.img_id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        const json = await response.json();
        console.log(json);
    }

    return(
        <form onSubmit={updateWebImage} className="flex gap-4 p-4 items-center justify-center border-b-4 w-full border-[#E0D3AF]">
            <div className="text-center">
                <img className="h-60" src={image.img_url} />
                <p>Current {image.name} Image</p>
            </div>
            <div>
                <img className="h-60" src={img_url} alt="" />
                <input 
                    type="file"
                    onChange={(e) => uploadImage(e.target.files[0])}
                    className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('img_url') ? "border-red-600" : "border-slate-800")}
                />
                <label className="block">New {image.name} Picture</label>
            </div>
            <button className="bg-green-950 border-none text-white p-2 rounded-s-full rounded-e-full cursor-pointer">Save New Picture</button>
            { error && <div className="p-3 border-2 text-red-600 border-red-600 bg-red-200 rounded-md my-5">{error}</div>}

        </form>
    )
}