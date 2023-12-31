import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';
import { useWebImagesContext } from '../../hooks/useWebImagesContext';

export default function BuildHero() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    // declare content variables
    let title = null;

    if (contents) {
        const ourClassesTitle = contents.find(content => content.name === 'ourClassesHeroTitle');
        if (ourClassesTitle) { title = ourClassesTitle[language]}
    }

    // declare web image variables
    let heroMainImage = null, heroSubImage = null;

    if (webImages) {
        const heroMain = webImages.find(webImage => webImage.name === "Our Classes Hero Main");
        if (heroMain) { heroMainImage = heroMain.img_url };

        const heroSub = webImages.find(webImage => webImage.name === "Our Classes Hero Sub");
        if (heroSub) { heroSubImage = heroSub.img_url };
    }

    return(
        <div className="w-full flex flex-col">
            <div className="sm:h-96 bg-green-950/90 flex flex-col sm:flex-row items-center">
                <div className="flex h-56 w-full sm:h-full md:w-2/3 justify-center items-center gap-3 text-center bg-center bg-cover" style={{ backgroundImage: `url(${heroMainImage})` }}>
                    <div className='w-full flex justify-center bg-gray-300/50 py-4'>
                        <div className='flex w-full justify-center bg-white'>
                            <img src="/images/SkyLogo2.JPG" className='flex h-14 sm:h-20 bg-white py-2' />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center flex flex-col items-center justify-center gap-4 py-10 md:py-0">
                    <div className='text-5xl md:text-6xl'>{title}</div>
                        
                    <div className='flex items-center w-full lg:w-5/6 justify-center p-2'>
                        <div className='h-64 w-full sm:h-32 md:h-48 lg:h-52 xl:h-64 bg-cover bg-center border-8 border-red-900 rounded-xl' style={{ backgroundImage: `url(${heroSubImage})` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}