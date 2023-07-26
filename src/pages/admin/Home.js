import LandingPageEng from "../public/LandingPageEng";
import AdminNavbar from "../../components/AdminNavbar";

export default function AdminHome() {
    return(
        <div>
            <AdminNavbar />
            <div className="grid grid-cols-2">
                <LandingPageEng />
                <div>
                    Edit Landing Page
                </div>
            </div>
        </div>
    )
}