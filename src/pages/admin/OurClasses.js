import AdminNavbar from "../../components/AdminNavbar";
import { useContentsContext } from "../../hooks/useContentsContext";
import AdminEditForm from "../../components/AdminComps/AdminEditForm";
import OurClassesEng from "../public/OurClassesEng";


export default function AdminOurClasses() {
    const { contents } = useContentsContext();

    return(
        <div>
            <AdminNavbar />
            <div className="grid grid-cols-2">
                <OurClassesEng />
                
                <div className="bg-blue-950/90 flex flex-col items-center py-2 gap-2">
                {contents && contents.slice(34, 58).map((content) => (
                    <AdminEditForm key={content._id} content={content} />
                ))}
                </div>
            </div>
        </div>
    )
}