import OurTeam from '../../images/OurTeam.jpg'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildIntro() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null, text = null

    if (contents) {
        const ourTeamTitle = contents.find(content => content.name === 'ourTeamIntroTitle');
        if (ourTeamTitle) { title = ourTeamTitle[language]};

        const ourTeamText = contents.find(content => content.name === 'ourTeamIntroText');
        if (ourTeamText) { text = ourTeamText[language]};
    }

    return(
        <div className="flex justify-center items-center bg-red-900/90 py-6 lg:py-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 md:max-w-6x md:w-4/6 lg:w-5/6 xl:w-4/6 items-center  p-5 gap-4">
                <img src={OurTeam} alt="hi" className="border-8 border-green-950 rounded-xl" />
                <div className="flex flex-col justify-center items-center gap-4 lg:text-center">
                    <h2 className="text-5xl lg:text-3xl">{title}</h2>
                    <p className="text-md">{text}</p>
                </div>
            </div>
        </div>
    )
}