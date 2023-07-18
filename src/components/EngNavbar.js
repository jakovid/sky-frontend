import { Link } from "react-router-dom";
import SkyLogo from "../images/skylogo.jpg"

export default function EngNavbar() {
    return(
        <header className="bg-green-950 text-white flex">
            <div className="flex flex-row justify-between items-center h-20 w-full">
                <div className="bg-red-900 px-3 flex w-60 h-full justify-center items-center">
                    <Link to="/" className="bg-white h-14 w-14 flex justify-center items-center rounded-full">
                        <img src={SkyLogo} className="h-7" />
                    </Link>
                </div>
                <div className="pe-5">
                    <div className="flex flex-row gap-4">
                        <Link to="/" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>Home</p>
                        </Link>
                        <Link to="/about-us" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>About Us</p>
                        </Link>
                        <Link to="/our-team" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>Our Team</p>
                        </Link>
                        <Link to="/our-classes" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>Our Classes</p>
                        </Link>
                        <Link to="/contact-us" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>Contact Us</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}