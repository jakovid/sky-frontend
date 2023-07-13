import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function EngNavbar() {
    return(
        <header className="eng header">
            <div className="logo navbar">
                SkyEducation
            </div>
            <div className="navbar container">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/about-us">
                    <p>About Us</p>
                </Link>
                <Link to="/our-classes">
                    <p>Our Classes</p>
                </Link>
                <Link to="/contact-us">
                    <p>Contact Us</p>
                </Link>
            </div>
        </header>
    )
}