import { useState, useEffect } from "react";
import { useContentsContext } from '../../hooks/useContentsContext';


// this is not in use, but it can be added to the code whenever new sections need to be added

export default function AdminAddNewData() {
    const { contents, dispatch } = useContentsContext()

    const [name, setName] = useState('')
    const [chinese, setChinese] = useState('')
    const [english, setEnglish] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    

    useEffect(() => {
        const fetchContents= async() => {
            const response = await fetch('/api/content')
            const json = await response.json()

            if(response.ok) {
                dispatch({
                    type: 'SET_CONTENTS',
                    payload: json
                })
            }
        }

        fetchContents()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const content = {name, chinese, english}

        const response = await fetch('/api/content', {
            method: 'POST',
            body: JSON.stringify(content),
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
            console.log('new content added', json)
            setName('')
            setChinese('')
            setEnglish('')
            dispatch({type: 'CREATE_CONTENT', payload: json})
        }
    }

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-red-900/90 flex flex-col items-center">
        <h3>Add a New Content</h3>

        <label className="block">Content Name:</label>
        <input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('name') ? "border-red-600" : "border-slate-800")}
        />
        <label className="block">Chinese:</label>
        <input 
            type="text"
            onChange={(e) => setChinese(e.target.value)}
            value={chinese}
            className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('name') ? "border-red-600" : "border-slate-800")}
        />
        <label className="block">English:</label>
        <input 
            type="text"
            onChange={(e) => setEnglish(e.target.value)}
            value={english}
            className={"block p-2 w-full mt-2 mb-4 border-2 rounded-md box-border " + (emptyFields.includes('name') ? "border-red-600" : "border-slate-800")}
        />

        

        <button className="bg-green-950 border-none text-white p-2 rounded-s-full rounded-e-full cursor-pointer">Add Content</button>
        { error && <div className="p-3 border-2 text-red-600 border-red-600 bg-red-200 rounded-md my-5">{error}</div>}
    </form>

    )
}