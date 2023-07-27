import { Link } from "react-router-dom"

export default function AdminNavbar() {
    return (
        <header className="bg-blue-950">
            <div className="flex justify-center gap-4 p-4">
                <Link to="/admin">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Admin</h1>
                </Link>
                <Link to="/admin/teachers">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Manage Teachers</h1>
                </Link>
                <Link to="/admin/home">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Home</h1>
                </Link>
                <Link to="/admin/about-us">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit About Us</h1>
                </Link>
                <Link to="/admin/our-team">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Our Team</h1>
                </Link>
                <Link to="/admin/our-classes">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Our Classes</h1>
                </Link>
                <Link to="/admin/contact-us">
                    <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Edit Contact Us</h1>
                </Link>
                <h1 className="text-xl border-4 p-2 rounded-s-full rounded-e-full">Log Out</h1>
            </div>
        </header>
    )
}