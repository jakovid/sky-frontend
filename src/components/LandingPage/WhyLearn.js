import { useLanguageContext } from '../../hooks/useTeachersContext copy'
import { WebContent } from '../../content/WebContent'

export default function BuildWhyLearn() {
    const { language, dispatch } = useLanguageContext();

    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();


    return(
        <div className="bg-red-900/90 py-10 flex justify-center text-center">
            <div className="flex flex-col items-center gap-4 w-4/6 max-w-6xl">
                <h2 className="text-6xl">{WebContent.homeSectionOneTitle[language]}</h2>
                <p>{WebContent.homeSectionOneSubtitle[language]}</p>
                <p className="text-xl">{WebContent.homeSectionOneText[language]}</p>
                <div className="bg-green-950 text-3xl px-6 py-2 border-4 border-green-950 rounded-s-full rounded-e-full cursor-pointer hover:bg-[#E0D3AF] hover:text-green-950">
                    {language === "English" && currentMonth < 8 ? `New English Classes Starting July ${currentYear}` : language === "English" ? `New English Classes Starting January ${currentYear + 1}` : ""}
                    {language === "Chinese" && currentMonth < 8 ? `${currentYear}年7月開始最新課程！` : language === "Chinese" ? `${currentYear+1}年1月開始最新課程！` : ""}
                </div>
            </div>
        </div>
    )
}