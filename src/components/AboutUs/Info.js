import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';
import { useWebImagesContext } from '../../hooks/useWebImagesContext';


export default function BuildInfo(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    // declare content variables
    let titleOne = null, textOne = null, titleTwo = null, textTwo = null, button = null
    
    if(contents) {
        const aboutUsTitleOne = contents.find(content => content.name === 'aboutUsInfoOneTitle');
        if (aboutUsTitleOne) { titleOne = aboutUsTitleOne[language]}

        const aboutUsTextOne = contents.find(content => content.name === 'aboutUsInfoOneText');
        if (aboutUsTextOne) { textOne = aboutUsTextOne[language]}

        const aboutUsTitleTwo = contents.find(content => content.name === 'aboutUsInfoTwoTitle');
        if (aboutUsTitleTwo) { titleTwo = aboutUsTitleTwo[language]}

        const aboutUsTextTwo = contents.find(content => content.name === 'aboutUsInfoTwoText');
        if (aboutUsTextTwo) { textTwo = aboutUsTextTwo[language]}

        const aboutUsButton = contents.find(content => content.name === 'aboutUsInfoButton');
        if (aboutUsButton) { button = aboutUsButton[language]}
    }

    // declare web image variables
    let aboutUsInfoImageOne = null, aboutUsInfoImageTwo = null, aboutUsInfoCTAImage = null

    if (webImages) {
        const aboutUsInfoOne = webImages.find(webImage => webImage.name === 'About Us Info One');
        if (aboutUsInfoOne) { aboutUsInfoImageOne = aboutUsInfoOne.img_url}

        const aboutUsInfoTwo = webImages.find(webImage => webImage.name === 'About Us Info Two');
        if (aboutUsInfoTwo) { aboutUsInfoImageTwo = aboutUsInfoTwo.img_url}

        const aboutUsInfoCTA = webImages.find(webImage => webImage.name === 'About Us Info CTA');
        if (aboutUsInfoCTA) { aboutUsInfoCTAImage = aboutUsInfoCTA.img_url}
    }

    return(
        <div className="bg-green-950/90 flex justify-center items-center">
            <div className="h-full flex flex-col items-center">
                <div className="flex flex-col px-8 lg:px-0 lg:flex-row lg:w-2/3 gap-8 lg:gap-10 items-center py-10 lg:py-28">
                    <img className=" lg:w-1/3 rounded-3xl border-8 border-red-900" src={aboutUsInfoImageOne}/>
                    <div className="flex flex-col gap-4 lg:gap-10">
                        <div className="text-6xl lg:text-4xl xl:text-6xl">{titleOne}</div>
                        <p className="text-xl lg:text-sm xl:text-xl">{textOne}</p>
                    </div>
                </div>

                <div className="h-[15rem] lg:h-[25rem] flex justify-center items-center border-t-8 border-b-8 border-red-900 bg-center w-full bg-cover" style={{ backgroundImage: `url(${aboutUsInfoCTAImage})` }}>
                    <div className="bg-green-950 text-xl py-2 px-4 lg:px-8 lg:py-4 rounded-s-full rounded-e-full lg:text-4xl cursor-pointer border-8 border-red-900 hover:text-green-950 hover:bg-[#E0D3AF]">{button}</div>
                </div>

                <div className="flex flex-col-reverse px-8 lg:px-0 lg:flex-row lg:w-2/3 gap-8 lg:gap-10 items-center py-10 lg:py-28">
                    <div className="flex flex-col gap-4 lg:gap-10">
                        <div className="text-6xl lg:text-4xl xl:text-6xl">{titleTwo}</div>
                        <p className="text-xl lg:text-sm xl:text-xl">{textTwo}</p>
                    </div>
                    <img className=" lg:w-1/3 rounded-3xl border-8 border-red-900" src={aboutUsInfoImageTwo}/>
                </div>
            </div>
        </div>
    )
}