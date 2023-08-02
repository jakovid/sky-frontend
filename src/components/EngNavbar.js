import { Link } from "react-router-dom";
import SkyLogo from "../images/skylogo.jpg"
import { useLanguageContext } from "../hooks/useLanguageContext";
import English from "../images/usa.png"
import Chinese from "../images/tw.png"
import { useContentsContext } from '../hooks/useContentsContext'
import { AiFillHome, AiFillInfoCircle, AiOutlineTeam, AiOutlineMail } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'

export default function EngNavbar() {
    const { language, dispatch } = useLanguageContext();
    const { contents } = useContentsContext()

    let home = null, aboutUs = null, ourTeam = null, ourClasses = null, contactUs = null;

    if (contents){
        home = contents[0][language];
        aboutUs = contents[1][language];
        ourTeam = contents[2][language]; 
        ourClasses = contents[3][language]; 
        contactUs = contents[4][language];
    }

    function switchLanguage(language){
        dispatch({
            type: 'SET_LANGUAGE',
            payload: language
        })
    };


    return(
        <header className="bg-green-950 text-white flex">
            <div className="flex flex-row justify-between items-center h-20 w-full">
                <div className="bg-red-900 px-3 flex w-60 h-full justify-center items-center">
                    <Link to="/" className="bg-white h-14 w-14 flex justify-center items-center rounded-full">
                        <img src={SkyLogo} className="h-7" />
                    </Link>
                </div>
                <div className="pe-5 flex items-center gap-4">
                    <div className="flex flex-row gap-4 items-center">
                        <Link to="/" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                            <p className="text-xs text-center hidden sm:text-md sm:block">{home}</p>
                            <AiFillHome className="sm:hidden text-2xl" />
                        </Link>
                        <Link to="/about-us" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                            <p className="text-xs text-center hidden sm:text-md sm:block">{aboutUs}</p>
                            <AiFillInfoCircle className="sm:hidden text-2xl" />
                        </Link>
                        <Link to="/our-team" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                            <p className="text-xs text-center hidden sm:text-md sm:block">{ourTeam}</p>
                            <AiOutlineTeam className="sm:hidden text-2xl" />
                        </Link>
                        <Link to="/our-classes" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                            <p className="text-xs text-center hidden sm:text-md sm:block">{ourClasses}</p>
                            <FaChalkboardTeacher className="sm:hidden text-2xl"/>
                        </Link>
                        <Link to="/contact-us" className="hover:bg-red-900 hover:text-green-950 px-1  py-1 sm:px-3 rounded-s-full rounded-e-full">
                            <p className="text-xs text-center hidden sm:text-md sm:block">{contactUs}</p>
                            <AiOutlineMail className="sm:hidden text-2xl" />
                        </Link>
                    </div>
                    <div>
                        {language && language === 'chinese' ? <div className="bg-black h-6 w-6 sm:h-10 sm:w-10 bg-cover bg-center rounded-full cursor-pointer" style={{ backgroundImage: `url(${English})` }} onClick={() => switchLanguage("english")}  /> : <div className="bg-black h-6 w-6 sm:h-10 sm:w-10 bg-cover bg-center rounded-full cursor-pointer" style={{ backgroundImage: `url(${Chinese})` }} onClick={() => switchLanguage("chinese")}  />}
                    </div>
                </div>
            </div>
        </header>
    )
}