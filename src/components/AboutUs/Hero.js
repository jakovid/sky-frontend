import SkyLogo from '../../images/SkyLogo2.webp'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildHero() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null

    if (contents) {
        const aboutUsTitle = contents.find(content => content.name === 'aboutUsHeroTitle');
        if (aboutUsTitle) { title = aboutUsTitle[language]};
    }

    return(
        <div className="w-full flex flex-col"> 
            <div className="sm:h-96 bg-green-950/90 flex flex-col sm:flex-row items-center">
                    <div className="flex h-56 w-full sm:h-full md:w-2/3 md:h-full justify-center items-center gap-3 text-center bg-center bg-cover bg-[url('https://cdn.discordapp.com/attachments/989268383751106560/1130725410976571502/jakovid_A_Canadian_Teacher_teaching_students_in_an_English_clas_7787d88c-5dd3-4986-8e03-53884d50e37d.png')]">
                        <div className='w-full flex justify-center bg-gray-300/50 pt-4'>
                            <img src={SkyLogo} />
                        </div>
                    </div>
                    <div className="sm:w-1/3 text-center flex flex-col items-center justify-center gap-4 py-10 md:py-0">
                        <div className='text-5xl md:text-6xl'>{title}</div>
                        
                        <div className='flex items-center justify-center'>
                            <img className="h-56 sm:h-32 md:h-40 lg:h-52 xl:h-64 rounded-full border-8 border-red-900 z-10" src="https://cdn.discordapp.com/attachments/989268383751106560/1130489036931346522/jakovid_a_student_raising_her_hand_in_an_English_classroom_in_T_f508f6cb-8ad7-4951-bbed-5e075db1b282.png"/>
                            <img className="h-56 sm:h-32 md:h-40 lg:h-52 xl:h-64 rounded-full border-8 border-red-900 -ms-24 sm:-ms-12 md:-ms-20 lg:-ms-24" src="https://cdn.discordapp.com/attachments/989268383751106560/1130489653364011048/jakovid_An_American_Teacher_in_an_English_classroom_in_Taiwan_w_8fa7cd68-00ea-466b-9903-5f7305602c5b.png"/>
                        </div>
                    </div>
            </div>
            
        </div>
        // 
    )
}