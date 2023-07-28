import LandingPageEng from "../public/LandingPageEng";
import AdminNavbar from "../../components/AdminNavbar";
import { useContentsContext } from "../../hooks/useContentsContext";
import { useEffect } from "react";

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
                
                <div className="bg-blue-950/90">
                    <form onSubmit={handleSubmit} className="p-4">
                    <label>Header English:</label>
                        <input type="text"></input>
                        <label>Header Chinese:</label>
                        <input type="text"></input>
                        <button className="bg-green-950 border-none text-white p-2 rounded-s-full rounded-e-full cursor-pointer">Add Teacher</button>
                    </form>
                </div>
            </div>
        </div>
    )
}