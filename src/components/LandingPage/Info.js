import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';
import { useWebImagesContext } from '../../hooks/useWebImagesContext';

export default function BuildInfo() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    // declaring content variables
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

    // declaring web image variables
    let homeInfoImageOne = null, homeInfoImageTwo = null, homeInfoImageThree = null

    if (webImages) {
        const homeInfoOne = webImages.find(webImage => webImage.name === 'Home Info One');
        if (homeInfoOne) { homeInfoImageOne = homeInfoOne.img_url}

        const homeInfoTwo = webImages.find(webImage => webImage.name === 'Home Info Two');
        if (homeInfoTwo) { homeInfoImageTwo = homeInfoTwo.img_url}

        const homeInfoThree = webImages.find(webImage => webImage.name === 'Home Info Three');
        if (homeInfoThree) { homeInfoImageThree = homeInfoThree.img_url}
    }


    return(
        <div className="bg-green-950/90 flex justify-center">
            <div className="flex flex-col gap-10 my-10 xl:w-4/6 xl:max-w-6xl">
                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-10 bg-green-950 p-5 lg:rounded-xl lg:border-8 lg:border-red-900">
                    <img className="h-72 lg:h-80 rounded-full border-8 border-red-900" src={homeInfoImageOne}/>
                    <div className="flex flex-col w-full items-center text-center gap-6 justify-center">
                        <h2 className="text-4xl lg:text-6xl flex flex-wrap leading-tight">{titleOne}</h2>
                        <p className="text-lg lg:text-xl">{textOne}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-10 bg-green-950 p-5 lg:rounded-xl lg:border-8 lg:border-red-900">
                    <img className="h-72 lg:h-80 rounded-full border-8 border-red-900" src={homeInfoImageTwo}/>
                    <div className="flex flex-col w-full items-center text-center gap-6 justify-center">
                        <h2 className="text-4xl lg:text-6xl flex flex-wrap leading-tight">{titleTwo}</h2>
                        <p className="text-lg lg:text-xl">{textTwo}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-10 bg-green-950 p-5 lg:rounded-xl lg:border-8 lg:border-red-900">
                    <img className="h-72 lg:h-80 rounded-full border-8 border-red-900" src={homeInfoImageThree}/>
                    <div className="flex flex-col w-full items-center gap-6 justify-center text-center">
                        <h2 className="text-4xl lg:text-6xl flex flex-wrap leading-tight">{titleThree}</h2>
                        <p className="text-lg lg:text-xl">{textThree}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}