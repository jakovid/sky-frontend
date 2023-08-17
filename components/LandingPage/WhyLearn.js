import Link from 'next/link';

import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildWhyLearn() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null, subtitle = null, text = null

    if (contents) {
        const whyTitle = contents.find(content => content.name === 'homeSectionOneTitle');
        if(whyTitle) {title = whyTitle[language]}

        const whySubtitle = contents.find(content => content.name === 'homeSectionOneSubtitle');
        if(whySubtitle) {subtitle = whySubtitle[language]}
        
        const whyText = contents.find(content => content.name === 'homeSectionOneText');
        if(whyText) {text = whyText[language]}
    }

    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();


    return(
        <div className="bg-red-900/90 py-10 flex justify-center sm:text-center">
            <div className="flex flex-col items-center gap-4 px-4 sm:w-4/6 max-w-6xl">
                <h2 className="text-6xl text-center">{title}</h2>
                <p className='text-center'>{subtitle}</p>
                <p className="text-lg sm:text-xl">{text}</p>
                <Link href="/our-classes" >
                    <div className="bg-green-950 text-center text-xl sm:text-3xl px-6 py-2 border-4 border-green-950 rounded-s-full rounded-e-full cursor-pointer hover:bg-[#E0D3AF] hover:text-green-950">
                        {language === "english" && currentMonth < 8 ? `New English Classes Starting July ${currentYear}` : language === "english" ? `New English Classes Starting January ${currentYear + 1}` : ""}
                        {language === "chinese" && currentMonth < 8 ? `${currentYear}年7月開始最新課程！` : language === "chinese" ? `${currentYear+1}年1月開始最新課程！` : ""}
                    </div>
                </Link>
            </div>
        </div>
    )
}