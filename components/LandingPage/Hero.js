import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext'
import { useWebImagesContext } from '../../hooks/useWebImagesContext'

export default function BuildHero() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();
    const { webImages } = useWebImagesContext();
    
    let title = null, subtitle = null, location = null, button = null

    if (contents) {
        const heroTitle = contents.find(content => content.name === 'homeHeroTitle');
        if (heroTitle) { title = heroTitle[language]}

        const heroSubtitle = contents.find(content => content.name === 'homeHeroSubtitle');
        if (heroSubtitle) { subtitle = heroSubtitle[language]}

        const heroLocation = contents.find(content => content.name === 'homeHeroLocation');
        if (heroLocation) { location = heroLocation[language]}
        
        const heroButton = contents.find(content => content.name === 'homeHeroButton');
        if (heroButton) { button = heroButton[language]}
    }

    let heroMain = null

    if (webImages){
        const heroMainImg = webImages.find(webImage => webImage.name === 'Home Hero');
        if (heroMainImg) { heroMain = heroMainImg.img_url}
    }

    return(
        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:h-96">
            <div className="flex justify-center h-56 items-center sm:col-span-2 sm:h-full bg-center" style={{ backgroundImage: `url(${heroMain})` }}>
                <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                    <img src="/images/SkyLogo2.webp" />
                </div>
            </div>
            <div className="bg-green-950/90 flex flex-col justify-center items-center text-center py-10 px-6 sm:py-4 gap-3">
                <p className="text-5xl sm:text-3xl md:text-4xl">{title}</p>
                <p className="text-xl sm:text-md md:text-md">{subtitle}</p>
                <p className="text-xs">- {location}-</p>
                <div className="bg-red-900 px-6 py-2 border-4 border-red-900 rounded-s-full rounded-e-full text-sm cursor-pointer hover:bg-[#E0D3AF] hover:text-red-900">{button}</div>
                <p className="text-xs">- Est. 2008 -</p>
            </div>

        </div>
    )
}