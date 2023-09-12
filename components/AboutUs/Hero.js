import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';
import { useWebImagesContext } from '../../hooks/useWebImagesContext';

export default function BuildHero() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();

    // declare content variable

    let title = null

    if (contents) {
        const aboutUsTitle = contents.find(content => content.name === 'aboutUsHeroTitle');
        if (aboutUsTitle) { title = aboutUsTitle[language]};
    }

    // declare web image variables
    let heroMainImage = null, heroSubImageOne = null, heroSubImageTwo = null

    if(webImages){
        const heroMain = webImages.find(webImage => webImage.name === 'About Us Hero Main');
        if (heroMain) { heroMainImage = heroMain.img_url}

        const heroSubOne = webImages.find(webImage => webImage.name === 'About Us Hero Sub One');
        if (heroSubOne) { heroSubImageOne = heroSubOne.img_url}

        const heroSubTwo = webImages.find(webImage => webImage.name === 'About Us Hero Sub Two');
        if (heroSubTwo) { heroSubImageTwo = heroSubTwo.img_url}
    }

    return(
        <div className="w-full flex flex-col"> 
            <div className="sm:h-96 bg-green-950/90 flex flex-col sm:flex-row items-center">
                    <div className="flex h-56 w-full sm:h-full md:w-2/3 md:h-full justify-center items-center gap-3 text-center bg-center bg-cover" style={{ backgroundImage: `url(${heroMainImage})` }}>
                        <div className='w-full flex justify-center items-center bg-gray-300/50 py-4'>
                            <img src="/images/SkyLogo2.JPG" className=' px-64 bg-white py-2'/>
                        </div>
                    </div>
                    <div className="sm:w-1/3 text-center flex flex-col items-center justify-center gap-4 py-10 md:py-0">
                        <div className='text-5xl md:text-6xl'>{title}</div>
                        
                        <div className='flex items-center justify-center'>
                            <img className="h-56 sm:h-32 md:h-40 lg:h-52 xl:h-64 rounded-full border-8 border-red-900 z-10" src={heroSubImageOne}/>
                            <img className="h-56 sm:h-32 md:h-40 lg:h-52 xl:h-64 rounded-full border-8 border-red-900 -ms-24 sm:-ms-12 md:-ms-20 lg:-ms-24" src={heroSubImageTwo}/>
                        </div>
                    </div>
            </div>
            
        </div>
        // 
    )
}