import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildInfo() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let titleOne = null, textOne = null, titleTwo = null, textTwo = null, titleThree = null, textThree = null

    if (contents) {
        const infoTitleOne = contents.find(content => content.name === 'homeSectionTwoBoxOneTitle');
        if (infoTitleOne) { titleOne = infoTitleOne[language]};

        const infoTextOne = contents.find(content => content.name === 'homeSectionTwoBoxOneText');
        if (infoTextOne) { textOne = infoTextOne[language]};

        const infoTitleTwo = contents.find(content => content.name === 'homeSectionTwoBoxTwoTitle');
        if (infoTitleTwo) { titleTwo = infoTitleTwo[language]};

        const infoTextTwo = contents.find(content => content.name === 'homeSectionTwoBoxTwoText');
        if (infoTextTwo) { textTwo = infoTextTwo[language]};

        const infoTitleThree = contents.find(content => content.name === 'homeSectionTwoBoxThreeTitle');
        if (infoTitleThree) { titleThree = infoTitleThree[language]};

        const infoTextThree = contents.find(content => content.name === 'homeSectionTwoBoxThreeText');
        if (infoTextThree) { textThree = infoTextThree[language]};
    }

    return(
        <div className="bg-green-950/90 flex justify-center">
            <div className="flex flex-col gap-10 my-10 xl:w-4/6 xl:max-w-6xl">
                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-10 bg-green-950 p-5 lg:rounded-xl lg:border-8 lg:border-red-900">
                    <img className="h-72 lg:h-80 rounded-full border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130412981453336646/jakovid_Students_being_taught_by_an_American_teacher_in_an_Engl_a8d1ae9e-6764-4d79-8e41-27de5cdf1157.png"/>
                    <div className="flex flex-col w-full items-center text-center gap-6 justify-center">
                        <h2 className="text-4xl lg:text-6xl flex flex-wrap leading-tight">{titleOne}</h2>
                        <p className="text-lg lg:text-xl">{textOne}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-10 bg-green-950 p-5 lg:rounded-xl lg:border-8 lg:border-red-900">
                    <img className="h-72 lg:h-80 rounded-full border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130415225502449805/jakovid_Students_raising_their_hands_in_an_English_classroom_in_7ac1f7a2-ad22-4498-b980-26cffadab393.png"/>
                    <div className="flex flex-col w-full items-center text-center gap-6 justify-center">
                        <h2 className="text-4xl lg:text-6xl flex flex-wrap leading-tight">{titleTwo}</h2>
                        <p className="text-lg lg:text-xl">{textTwo}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-10 bg-green-950 p-5 lg:rounded-xl lg:border-8 lg:border-red-900">
                    <img className="h-72 lg:h-80 rounded-full border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130416420480634931/jakovid_Students_reading_books_in_an_English_classroom_in_Taiwa_ca2b4f01-c6fc-4b42-abea-1e1ec43ff256.png"/>
                    <div className="flex flex-col w-full items-center gap-6 justify-center text-center">
                        <h2 className="text-4xl lg:text-6xl flex flex-wrap leading-tight">{titleThree}</h2>
                        <p className="text-lg lg:text-xl">{textThree}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}