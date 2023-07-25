import { useLanguageContext } from '../../hooks/useTeachersContext copy'
import { WebContent } from '../../content/WebContent'

export default function BuildClassInfo(){
    const { language, dispatch } = useLanguageContext();

    return(
        <div className="bg-green-950/90 flex flex-col justify-center items-center">
            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130755685571899553/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a9ea020d-fab6-44b0-a8d9-6b2a6e27301e.png')]">
                <div className="w-1/2 bg-[#E0D3AF] text-red-900 p-8 text-center text-xl border-8 border-red-900 rounded-xl">{WebContent.ourClassesClassTimeText[language]}</div>
            </div>
            <div className="w-2/3 bg-green-950 flex flex-col justify-center items-center my-10 p-8 gap-4 border-8 border-red-900 rounded-xl">
                <h2 className="text-6xl">{WebContent.ourClassesClassTimeTitle[language]}</h2>
                <div className="grid grid-cols-2 gap-8 w-2/3 text-center">
                    <div>
                        <p className="text-2xl">{WebContent.ourClassesClassTimeOneTitle[language]}</p>
                        <p>{WebContent.ourClassesClassTimeOneText[language]}</p>
                    </div>
                    <div>
                        <p className="text-2xl">{WebContent.ourClassesClassTimeTwoTitle[language]}</p>
                        <p>{WebContent.ourClassesClassTimeTwoText[language]}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 w-2/3 text-center">
                    <div>
                        <p className="text-2xl">{WebContent.ourClassesClassTimeThreeTitle[language]}</p>
                        <p>{WebContent.ourClassesClassTimeThreeText[language]}</p>
                    </div>
                    <div>
                        <p className="text-2xl">{WebContent.ourClassesClassTimeFourTitle[language]}</p>
                        <p>{WebContent.ourClassesClassTimeFourText[language]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}