import { useLanguageContext } from '../../hooks/useLanguageContext'
import { WebContent } from '../../content/WebContent'

import SkyLogo from '../../images/SkyLogo2.webp';

export default function BuildHero() {
    const { language, dispatch } = useLanguageContext();

    return(
        <div className="w-full flex flex-col">
            <div className="h-96 bg-green-950/90 flex flex-row items-center">
                <div className="w-2/3 h-full flex justify-center items-center gap-3 text-center bg-center bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1132229919137611777/jakovid_a_dark_red_and_dark_green_theme_american_english_teache_a54ec510-4ed8-45ea-ae9f-4a7fc9b0d0b0.png')]">
                    <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                           <img src={SkyLogo} />
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center gap-4">
                    <div className='text-6xl'>{WebContent.contactUsHeroTitle[language]}</div>
                        
                    <div className='flex items-center justify-center'>
                        <div className='h-64 w-96 bg-cover bg-center border-8 border-red-900 rounded-xl bg-[url("https://cdn.discordapp.com/attachments/989268383751106560/1132229925689110598/jakovid_a_dark_red_and_dark_green_theme_american_english_teache_5524951e-1ec7-4d6d-9712-043324dd4fce.png")]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}