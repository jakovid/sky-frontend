import { Link } from "react-router-dom";

export default function EngNavbar() {
    return(
        <header className="flex flex-row bg-green-950 text-white justify-between items-center h-16">
            <div className="bg-red-900 px-3 flex w-60 h-full justify-center items-center">
                <p >SkyEducation</p>
            </div>
            <div className="pe-5">
                <div className="flex flex-row gap-4">
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
            </div>
        </header>
    )
}