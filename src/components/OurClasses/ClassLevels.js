import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildClassLevels(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let levelOneTitle = null, levelOneText = null, levelTwoTitle = null, levelTwoText = null, levelThreeTitle = null, levelThreeText = null, buttonOne = null, buttonTwo = null

    if (contents) {
        levelOneTitle = contents.find(content => content.name === 'ourClassesInfoOneTitle')[language];
        levelOneText = contents.find(content => content.name === 'ourClassesInfoOneText')[language];
        levelTwoTitle = contents.find(content => content.name === 'ourClassesInfoTwoTitle')[language];
        levelTwoText = contents.find(content => content.name === 'ourClassesInfoTwoText')[language];
        levelThreeTitle = contents.find(content => content.name === 'ourClassesInfoThreeTitle')[language];
        levelThreeText = contents.find(content => content.name === 'ourClassesInfoThreeText')[language];
        buttonOne = contents.find(content => content.name === 'ourClassesButtonOne')[language];
        buttonTwo = contents.find(content => content.name === 'ourClassesButtonTwo')[language];
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center bg-red-900/90">
            <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                <img className="w-96  rounded-3xl border-8 border-green-950" src="https://cdn.discordapp.com/attachments/989268383751106560/1130755668555599902/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a96abf72-14ef-4646-8f05-a6c6981af1b9.png"/>
                <div className="flex flex-col gap-10">
                    <div className="text-6xl">{levelOneTitle}</div>
                    <p className="text-xl">{levelOneText}</p>
                </div>
            </div>
            </div>

            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1131857448806907934/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_f18fc469-1906-4c0c-8af7-b055fb3dc00c.png')]">
                <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">{buttonOne}</div>
            </div>

            <div className="w-full flex justify-center items-center bg-green-950/90">
                <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                    <div className="flex flex-col gap-10">
                        <div className="text-6xl">{levelTwoTitle}</div>
                        <p className="text-xl">{levelTwoText}</p>
                    </div>
                    <img className="w-96  rounded-3xl border-8 border-red-900" src="https://cdn.discordapp.com/attachments/989268383751106560/1130756640430358599/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_7598e7a1-6e2b-4618-92aa-08489fc27cb5.png"/>
                </div>
            </div>

            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1131858031517372528/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_5f8d6ec4-549a-4da8-8d65-982efeb85aa0.png')]">
                <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">{buttonTwo}</div>
            </div>

            <div className="w-full flex justify-center items-center bg-red-900/90 border-b-8 border-red-900">
                <div className="flex flex-row w-2/3 gap-20 items-center py-28">
                    <img className="w-96 rounded-3xl border-8 border-green-950" src="https://cdn.discordapp.com/attachments/989268383751106560/1131857448806907934/jakovid_a_dark_red_and_dark_green_themed_English_classroom_with_f18fc469-1906-4c0c-8af7-b055fb3dc00c.png"/>
                    <div className="flex flex-col gap-10">
                        <div className="text-6xl">{levelThreeTitle}</div>
                        <p className="text-xl">{levelThreeText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}