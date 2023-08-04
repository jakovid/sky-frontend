import AdminNavbar from "../../components/AdminNavbar";
import { useContentsContext } from "../../hooks/useContentsContext";
import AdminEditForm from "../../components/AdminComps/AdminEditForm";
import OurTeamEng from "../public/OurTeamEng";
import { useState } from "react";


export default function AdminOurTeam() {
    const { contents } = useContentsContext();
    const [editType, setEditType] = useState('content')

    const handleClick = (type) => {
        setEditType(type);
    }

    return(
        <div>
            <AdminNavbar />
            <div className="grid grid-cols-2">
                <OurTeamEng />

                <div>
                    <div className="bg-red-900 p-5 flex items-center justify-center gap-8">
                        <button onClick={() => {handleClick('content')}} className="bg-green-950 px-8 py-2 rounded-s-full rounded-e-full cursor-pointer ">Content</button>
                        <button onClick={() => {handleClick('images')}}  className="bg-green-950 px-8 py-2 rounded-s-full rounded-e-full cursor-pointer ">Images</button>
                    </div>
                    <div className="bg-blue-950/90 flex flex-col items-center py-2 gap-2">
                        {editType === 'content' && contents && contents.slice(31, 34).map((content) => (
                            <AdminEditForm key={content._id} content={content} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}