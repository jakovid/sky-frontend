import SkyLogo from '../../images/SkyLogo2.webp';
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildHero() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null

    if (contents) {
        const ourTeamTitle = contents.find(content => content.name === 'ourTeamHeroTitle');
        if (ourTeamTitle) { title = ourTeamTitle[language]};
    }

    return(
        <div className="w-full flex flex-col">
            <div className="sm:h-96 bg-green-950/90 flex flex-col sm:flex-row items-center">
                <div className="flex h-56 w-full sm:h-full md:w-2/3 justify-center items-center gap-3 text-center bg-center bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130786300308492389/jakovid_dark_red_and_dark_green_theme_a_group_of_American_Engli_f421b1a1-a73a-48ac-9451-47eaa85437ab.png')]">
                    <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                           <img src={SkyLogo} />
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center flex flex-col items-center justify-center gap-4 py-10 md:py-0">
                    <div className='text-5xl md:text-6xl'>{title}</div>
                        
                    <div className='flex items-center w-full lg:w-5/6 justify-center p-2'>
                        <div className='h-64 w-full sm:h-32 md:h-48 lg:h-52 xl:h-64 bg-cover bg-center border-8 border-red-900 rounded-xl bg-[url("https://cdn.discordapp.com/attachments/989268383751106560/1130786300308492389/jakovid_dark_red_and_dark_green_theme_a_group_of_American_Engli_f421b1a1-a73a-48ac-9451-47eaa85437ab.png")]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}