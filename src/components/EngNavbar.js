import { Link } from "react-router-dom";
import SkyLogo from "../images/skylogo.jpg"
import { useLanguageContext } from "../hooks/useTeachersContext copy";
import English from "../images/usa.png"
import Chinese from "../images/tw.png"
import { WebContent } from "../content/WebContent";

export default function EngNavbar() {
    const { language, dispatch } = useLanguageContext();

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
                    <div className="flex flex-row gap-4">
                        <Link to="/" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>{WebContent.headerHome[language]}</p>
                        </Link>
                        <Link to="/about-us" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>{WebContent.headerAboutUs[language]}</p>
                        </Link>
                        <Link to="/our-team" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>{WebContent.headerOurTeam[language]}</p>
                        </Link>
                        <Link to="/our-classes" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>{WebContent.headerOurClasses[language]}</p>
                        </Link>
                        <Link to="/contact-us" className="hover:bg-red-900 hover:text-green-950 px-3 py-1 rounded-s-full rounded-e-full">
                            <p>{WebContent.headerContactUs[language]}</p>
                        </Link>
                    </div>
                    <div>
                        {language && language === 'Chinese' ? <div className="bg-black h-10 w-10 bg-cover bg-center rounded-full cursor-pointer" style={{ backgroundImage: `url(${English})` }} onClick={() => switchLanguage("English")}  /> : <div className="bg-black h-10 w-10 bg-cover bg-center rounded-full cursor-pointer" style={{ backgroundImage: `url(${Chinese})` }} onClick={() => switchLanguage("Chinese")}  />}
                    </div>
                </div>
            </div>
        </header>
    )
}