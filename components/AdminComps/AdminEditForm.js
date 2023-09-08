import { useState } from "react";
import { useContentsContext } from "../../hooks/useContentsContext";

export default function AdminEditForm({ content }) {

    const { dispatch } = useContentsContext();

    const token = localStorage.getItem('token');

    const [english, setEnglish] = useState(content.english)
    const [chinese, setChinese] = useState(content.chinese)


    const updateContent= async (e) => {
        // I can't figure out how to re-render without reloading the webpage
        // e.preventDefault()
        
        const API_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/content/` + content._id;
        const response = await fetch(API_ENDPOINT, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ chinese, english })
        })
        const json = await response.json()
        console.log('updating')

        if (response.ok) {
            sendDispatch(json);
        }
    }

    const sendDispatch = (json) => {
        dispatch({ type: 'PATCH_CONTENT', payload: json })
    }

    return(
        <form onSubmit={updateContent} className="bg-blue-950 p-3 grid grid-cols-3 gap-2 w-4/5 items-center border-white border-2">
            
            <div className="flex flex-col col-span-2">
                <label>
                    English:
                    <textarea rows={1} className="w-full text-black p-1" type="text" value={english} onChange={(e) => setEnglish(e.target.value)} />
                </label>

                <label>
                    Chinese:
                    <textarea rows={1} className="w-full text-black p-1" type="text" value={chinese} onChange={(e) => setChinese(e.target.value)} />
                </label>
            </div>
            
            <button type="submit" className="bg-red-900 text-xs sm:text-sm md:text-md lg:text-lg  h-auto w-auto m-2 xl:text-2xl rounded-s-full rounded-e-full cursor-pointer border-4 border-red-900 hover:bg-green-950">Save Update</button>
            
        </form>
    )
}