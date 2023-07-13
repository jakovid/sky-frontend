import { Link } from "react-router-dom"

export default function AdminNavbar() {
    return (
        <header>
            <div className="container">
                <Link to="/admin">
                    <h1>Admin</h1>
                </Link>
                <Link to="/admin/teachers">
                    <h1>Teachers</h1>
                </Link>
            </div>
        </header>
    )
}