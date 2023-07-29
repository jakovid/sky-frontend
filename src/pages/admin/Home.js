import LandingPageEng from "../public/LandingPageEng";
import AdminNavbar from "../../components/AdminNavbar";
import { useContentsContext } from "../../hooks/useContentsContext";
import AdminEditForm from "../../components/AdminComps/AdminEditForm";


export default function AdminHome() {
    const { contents, dispatch } = useContentsContext();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit')
    }

    return(
        <div>
            <AdminNavbar />
            <div className="grid grid-cols-2">
                <LandingPageEng />
                
                <div className="bg-blue-950/90 flex flex-col items-center py-2 gap-2">
                {contents && contents.slice(5, 18).map((content) => (
                    <AdminEditForm key={content._id} content={content} dispatch={dispatch} />
                ))}
                </div>
            </div>
        </div>
    )
}