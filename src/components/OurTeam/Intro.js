import OurTeam from '../../images/OurTeam.jpg'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildIntro() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null, text = null

    if (contents) {
        title = contents.find(content => content.name === 'ourTeamIntroTitle')[language];
        text = contents.find(content => content.name === 'ourTeamIntroText')[language]
    }

    return(
        <div className="flex justify-center items-center bg-red-900/90 py-10">
            <div className="grid grid-cols-2 max-w-6xl w-4/6 items-center  p-5 gap-4">
                <img src={OurTeam} alt="hi" className="border-8 border-green-950 rounded-xl" />
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h2 className="text-6xl">{title}</h2>
                    <p className="text-xl">{text}</p>
                </div>
            </div>
        </div>
    )
}