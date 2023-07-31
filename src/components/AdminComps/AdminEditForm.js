import { useState } from "react";
import { useContentsContext } from "../../hooks/useContentsContext";

export default function AdminEditForm({ content }) {

    const { dispatch } = useContentsContext();

    const [english, setEnglish] = useState(content.english)
    const [chinese, setChinese] = useState(content.chinese)


    const updateContent= async (e) => {
        
        const response = await fetch('/api/content/' + content._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
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
        <form onSubmit={updateContent} className="bg-blue-950 p-3 grid grid-cols-3 gap-2 w-4/5 items-center">
            
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
            
            <button type="submit" className="bg-red-900  h-auto w-auto m-2 text-2xl rounded-s-full rounded-e-full cursor-pointer border-4 border-red-900 hover:bg-green-950">Save Update</button>
            
        </form>
    )
}