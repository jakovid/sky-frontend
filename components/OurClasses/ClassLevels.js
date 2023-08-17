import Link from 'next/link';

import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';
import { useWebImagesContext } from '../../hooks/useWebImagesContext';

export default function BuildClassLevels(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    // declare content variables
    let levelOneTitle = null, levelOneText = null, levelTwoTitle = null, levelTwoText = null, levelThreeTitle = null, levelThreeText = null, buttonOne = null, buttonTwo = null

    if (contents) {
        const ourClassesLevelOneTitle = contents.find(content => content.name === 'ourClassesInfoOneTitle');
        if (ourClassesLevelOneTitle) { levelOneTitle = ourClassesLevelOneTitle[language]};

        const ourClassesLevelOneText = contents.find(content => content.name === 'ourClassesInfoOneText');
        if (ourClassesLevelOneText) { levelOneText = ourClassesLevelOneText[language]};

        const ourClassesLevelTwoTitle = contents.find(content => content.name === 'ourClassesInfoTwoTitle');
        if (ourClassesLevelTwoTitle) { levelTwoTitle = ourClassesLevelTwoTitle[language]};

        const ourClassesLevelTwoText = contents.find(content => content.name === 'ourClassesInfoTwoText');
        if (ourClassesLevelTwoText) { levelTwoText = ourClassesLevelTwoText[language]};

        const ourClassesLevelThreeTitle = contents.find(content => content.name === 'ourClassesInfoThreeTitle');
        if (ourClassesLevelThreeTitle) { levelThreeTitle = ourClassesLevelThreeTitle[language]};

        const ourClassesLevelThreeText = contents.find(content => content.name === 'ourClassesInfoThreeText');
        if (ourClassesLevelThreeText) { levelThreeText = ourClassesLevelThreeText[language]};

        const ourClassesButtonOne = contents.find(content => content.name === 'ourClassesButtonOne');
        if (ourClassesButtonOne) { buttonOne = ourClassesButtonOne[language]};

        const ourClassesButtonTwo = contents.find(content => content.name === 'ourClassesButtonTwo');
        if (ourClassesButtonTwo) { buttonTwo = ourClassesButtonTwo[language]};
    }

    // declare web image variables
    let classLevelOneImage = null, classLevelTwoImage = null, classLevelThreeImage = null, classLevelCTAOneImage = null, classLevelCTATwoImage = null

    if (webImages) {
        const classLevelOne = webImages.find(webImage => webImage.name === "Our Classes Level One");
        if (classLevelOne) { classLevelOneImage = classLevelOne.img_url}

        const classLevelTwo = webImages.find(webImage => webImage.name === "Our Classes Level Two");
        if (classLevelTwo) { classLevelTwoImage = classLevelTwo.img_url}

        const classLevelThree = webImages.find(webImage => webImage.name === "Our Classes Level Three");
        if (classLevelThree) { classLevelThreeImage = classLevelThree.img_url}

        const classLevelCTAOne = webImages.find(webImages => webImages.name === "Our Classes CTA One");
        if (classLevelCTAOne) { classLevelCTAOneImage = classLevelCTAOne.img_url }

        const classLevelCTATwo = webImages.find(webImages => webImages.name === "Our Classes CTA Two");
        if (classLevelCTATwo) { classLevelCTATwoImage = classLevelCTATwo.img_url }
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center bg-red-900/90">
                <div className="flex flex-col lg:flex-row sm:w-5/6 md:w-2/3 lg:w-5/6 gap-8 lg:gap-20 items-center p-8 lg:py-28">
                    <img className="w-auto max-h-96 rounded-3xl border-8 border-green-950" src={classLevelOneImage}/>
                    <div className="flex flex-col gap-8 lg:gap-10">
                        <div className="text-5xl lg:text-6xl">{levelOneTitle}</div>
                        <p className="text-xl lg:text-lg xl:text-xl">{levelOneText}</p>
                    </div>
                </div>
            </div>

            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover" style={{ backgroundImage: `url(${classLevelCTAOneImage})` }}>
                <Link href="/contact-us">
                    <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-2xl lg:text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">{buttonOne}</div>
                </Link>
            </div>

            <div className="w-full flex justify-center items-center bg-green-950/90">
                <div className="flex flex-col-reverse lg:flex-row  sm:w-5/6 md:w-2/3 lg:w-5/6 gap-8 lg:gap-20 items-center p-8 lg:py-28">
                    <div className="flex flex-col gap-8 lg:gap-10">
                        <div className="text-5xl lg:text-6xl">{levelTwoTitle}</div>
                        <p className="text-xl lg:text-lg xl:text-xl">{levelTwoText}</p>
                    </div>
                    <img className="w-auto max-h-96  rounded-3xl border-8 border-red-900" src={classLevelTwoImage}/>
                </div>
            </div>

            <div className="h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover" style={{ backgroundImage: `url(${classLevelCTATwoImage})` }}>
                <Link href="/contact-us">
                    <div className="bg-green-950 px-8 py-4 rounded-s-full rounded-e-full text-2xl lg:text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">{buttonTwo}</div>
                </Link>
            </div>

            <div className="w-full flex justify-center items-center bg-red-900/90 border-b-8 border-red-900">
                <div className="flex flex-col lg:flex-row sm:w-5/6 md:w-2/3 lg:w-5/6 gap-8 lg:gap-20 items-center p-8 lg:py-28">
                    <img className="w-auto max-h-96 rounded-3xl border-8 border-green-950" src={classLevelThreeImage}/>
                    <div className="flex flex-col gap-8 lg:gap-10">
                        <div className="text-5xl lg:text-6xl">{levelThreeTitle}</div>
                        <p className="text-xl lg:text-lg xl:text-xl">{levelThreeText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}