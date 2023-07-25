import OurTeam from '../../images/OurTeam.jpg'
import { useLanguageContext } from '../../hooks/useTeachersContext copy'
import { WebContent } from '../../content/WebContent'

export default function BuildIntro() {
    const { language, dispatch } = useLanguageContext();

    return(
        <div className="flex justify-center items-center bg-red-900/90 py-10">
            <div className="grid grid-cols-2 max-w-6xl w-4/6 items-center  p-5 gap-4">
                <img src={OurTeam} alt="hi" className="border-8 border-green-950 rounded-xl" />
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h2 className="text-6xl">{WebContent.ourTeamIntroTitle[language]}</h2>
                    <p className="text-xl">{WebContent.ourTeamIntroText[language]}</p>
                </div>
            </div>
        </div>
    )
}