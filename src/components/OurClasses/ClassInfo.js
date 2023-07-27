import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildClassInfo(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let mainText = null, timeTitle = null, timeOneTitle = null, timeOneText = null, timeTwoTitle = null, timeTwoText = null, timeThreeTitle = null, timeThreeText = null, timeFourTitle = null, timeFourText = null

    if (contents) {
        mainText = contents[40][language];
        timeTitle = contents[41][language];
        timeOneTitle = contents[42][language];
        timeOneText = contents[43][language];
        timeTwoTitle = contents[44][language];
        timeTwoText = contents[45][language];
        timeThreeTitle = contents[46][language];
        timeThreeText = contents[47][language];
        timeFourTitle = contents[48][language];
        timeFourText = contents[49][language];
    }

    return(
        <div className="bg-green-950/90 flex flex-col justify-center items-center">
            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130755685571899553/jakovid_a_dark_red_and_dark_green_themed_lively_English_classro_a9ea020d-fab6-44b0-a8d9-6b2a6e27301e.png')]">
                <div className="w-1/2 bg-[#E0D3AF] text-red-900 p-8 text-center text-xl border-8 border-red-900 rounded-xl">{mainText}</div>
            </div>
            <div className="w-2/3 bg-green-950 flex flex-col justify-center items-center my-10 p-8 gap-4 border-8 border-red-900 rounded-xl">
                <h2 className="text-6xl">{timeTitle}</h2>
                <div className="grid grid-cols-2 gap-8 w-2/3 text-center">
                    <div>
                        <p className="text-2xl">{timeOneTitle}</p>
                        <p>{timeOneText}</p>
                    </div>
                    <div>
                        <p className="text-2xl">{timeTwoTitle}</p>
                        <p>{timeTwoText}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 w-2/3 text-center">
                    <div>
                        <p className="text-2xl">{timeThreeTitle}</p>
                        <p>{timeThreeText}</p>
                    </div>
                    <div>
                        <p className="text-2xl">{timeFourTitle}</p>
                        <p>{timeFourText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}