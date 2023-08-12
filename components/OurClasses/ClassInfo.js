import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';
import { useWebImagesContext } from '../../hooks/useWebImagesContext';

export default function BuildClassInfo(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    // declare content variables
    let mainText = null, timeTitle = null, timeOneTitle = null, timeOneText = null, timeTwoTitle = null, timeTwoText = null, timeThreeTitle = null, timeThreeText = null, timeFourTitle = null, timeFourText = null

    if (contents) {
        const ourClassesMainText = contents.find(content => content.name === 'ourClassesClassTimeText');
        if (ourClassesMainText) { mainText = ourClassesMainText[language]};

        const ourClassesTimeTitle = contents.find(content => content.name === 'ourClassesClassTimeTitle');
        if (ourClassesTimeTitle) { timeTitle = ourClassesTimeTitle[language]};

        const ourClassesTimeOneTitle = contents.find(content => content.name === 'ourClassesClassTimeOneTitle');
        if (ourClassesTimeOneTitle) { timeOneTitle = ourClassesTimeOneTitle[language]};

        const ourClassesTimeOneText = contents.find(content => content.name === 'ourClassesClassTimeOneText');
        if (ourClassesTimeOneText) { timeOneText = ourClassesTimeOneText[language]};

        const ourClassesTimeTwoTitle = contents.find(content => content.name === 'ourClassesClassTimeTwoTitle');
        if (ourClassesTimeTwoTitle) { timeTwoTitle = ourClassesTimeTwoTitle[language]};

        const ourClassesTimeTwoText = contents.find(content => content.name === 'ourClassesClassTimeTwoText');
        if (ourClassesTimeTwoText) { timeTwoText = ourClassesTimeTwoText[language]};

        const ourClassesTimeThreeTitle = contents.find(content => content.name === 'ourClassesClassTimeThreeTitle');
        if (ourClassesTimeThreeTitle) { timeThreeTitle = ourClassesTimeThreeTitle[language]};

        const ourClassesTimeThreeText = contents.find(content => content.name === 'ourClassesClassTimeThreeText');
        if (ourClassesTimeThreeText) { timeThreeText = ourClassesTimeThreeText[language]};

        const ourClassesTimeFourTitle = contents.find(content => content.name === 'ourClassesClassTimeFourTitle');
        if (ourClassesTimeFourTitle) { timeFourTitle = ourClassesTimeFourTitle[language]};

        const ourClassesTimeFourText = contents.find(content => content.name === 'ourClassesClassTimeFourText');
        if (ourClassesTimeFourText) { timeFourText = ourClassesTimeFourText[language]};
    }

    // declare web image variables
    let classInfoMainImage = null

    if (webImages) {
        const classInfoMain = webImages.find(webImage => webImage.name === "Our Classes Info Main");
        if (classInfoMain) { classInfoMainImage = classInfoMain.img_url }
    }

    return(
        <div className="bg-green-950/90 flex flex-col justify-center items-center">
            <div className="h-[30rem] p-4 sm:h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover " style={{ backgroundImage: `url(${classInfoMainImage})` }}>
                <div className="sm:w-2/3 bg-[#E0D3AF] text-red-900 p-8 text-center md:text-xl border-8 border-red-900 rounded-xl">{mainText}</div>
            </div>
            <div className="sm:w-2/3 bg-green-950 flex flex-col justify-center items-center my-10 p-4 sm:p-8 m-4 gap-4 border-8 border-red-900 rounded-xl">
                <h2 className="text-5xl md:text-6xl">{timeTitle}</h2>
                <div className="grid grid-cols-2 gap-8 md:w-5/6 text-center">
                    <div>
                        <p className="text-lg md:text-2xl">{timeOneTitle}</p>
                        <p>{timeOneText}</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl">{timeTwoTitle}</p>
                        <p>{timeTwoText}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 md:w-5/6 text-center">
                    <div>
                        <p className="text-lg md:text-2xl">{timeThreeTitle}</p>
                        <p>{timeThreeText}</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl">{timeFourTitle}</p>
                        <p>{timeFourText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}