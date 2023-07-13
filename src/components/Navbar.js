import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Admin</h1>
                </Link>
                <Link to="/teachers">
                    <h1>Teachers</h1>
                </Link>
            </div>
        </header>
    )
}