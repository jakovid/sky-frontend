import { useLanguageContext } from '../../hooks/useTeachersContext copy'
import { WebContent } from '../../content/WebContent'

export default function BuildInfo() {
    const { language, dispatch } = useLanguageContext();

    return(
        <div className="bg-green-950/90 flex justify-center">
            <div className="flex flex-col gap-10 my-10 w-4/6 max-w-6xl">
                <div className="flex w-full gap-10 bg-green-950 p-5 rounded-xl border-8 border-red-900">
                    <img className="h-80 rounded-full border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130412981453336646/jakovid_Students_being_taught_by_an_American_teacher_in_an_Engl_a8d1ae9e-6764-4d79-8e41-27de5cdf1157.png"/>
                    <div className="flex flex-col w-full items-center text-center gap-6 justify-center">
                        <h2 className="text-6xl flex flex-wrap leading-tight">{WebContent.homeSectionTwoBoxOneTitle[language]}</h2>
                        <p className="text-xl">{WebContent.homeSectionTwoBoxOneText[language]}</p>
                    </div>
                </div>
                <div className="flex w-full gap-10 bg-green-950 p-5 rounded-xl border-8 border-red-900">
                    <img className="h-80 rounded-full border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130415225502449805/jakovid_Students_raising_their_hands_in_an_English_classroom_in_7ac1f7a2-ad22-4498-b980-26cffadab393.png"/>
                    <div className="flex flex-col w-full items-center text-center gap-6 justify-center">
                        <h2 className="text-6xl flex flex-wrap leading-tight">{WebContent.homeSectionTwoBoxTwoTitle[language]}</h2>
                        <p className="text-xl">{WebContent.homeSectionTwoBoxTwoText[language]}</p>
                    </div>
                </div>
                <div className="flex w-full gap-10 bg-green-950 p-5 rounded-xl border-8 border-red-900">
                    <img className="h-80 rounded-full border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130416420480634931/jakovid_Students_reading_books_in_an_English_classroom_in_Taiwa_ca2b4f01-c6fc-4b42-abea-1e1ec43ff256.png"/>
                    <div className="flex flex-col w-full items-center gap-6 justify-center text-center">
                        <h2 className="text-6xl flex flex-wrap leading-tight">{WebContent.homeSectionTwoBoxThreeTitle[language]}</h2>
                        <p className="text-xl">{WebContent.homeSectionTwoBoxThreeText[language]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}