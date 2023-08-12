import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext';

export default function BuildSemesterInfo(){
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let title = null, semesterOneTitle = null, semesterOneText = null, semesterTwoTitle = null, semesterTwoText = null

    if (contents) {
        const ourClassesTitle = contents.find(content => content.name === 'ourClassesSemestersTitle');
        if (ourClassesTitle) { title = ourClassesTitle[language]}

        const ourClassesSemesterOneTitle = contents.find(content => content.name === 'ourClassesSemesterOneTitle');
        if (ourClassesSemesterOneTitle) { semesterOneTitle = ourClassesSemesterOneTitle[language]};

        const ourClassesSemesterOneText = contents.find(content => content.name === 'ourClassesSemesterOneText');
        if (ourClassesSemesterOneText) { semesterOneText = ourClassesSemesterOneText[language]};

        const ourClassesSemesterTwoTitle = contents.find(content => content.name === 'ourClassesSemesterTwoTitle');
        if (ourClassesSemesterTwoTitle) { semesterTwoTitle = ourClassesSemesterTwoTitle[language]};

        const ourClassesSemesterTwoText = contents.find(content => content.name === 'ourClassesSemesterTwoText');
        if (ourClassesSemesterTwoText) { semesterTwoText = ourClassesSemesterTwoText[language]};
    }

    return(
        <div className="bg-red-900/90 flex flex-col p-4 lg:p-0 lg:py-10 justify-center items-center">
            <div className="bg-red-900 sm:w-2/3 flex flex-col items-center justify-center border-8 border-green-950 rounded-xl py-4 lg:py-10">
                <div className="flex flex-col items-center justify-center w-full gap-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl">{title}</h2>
                    <div className="flex flex-row p-4 lg:p-0 lg:w-2/3 justify-between text-center gap-4 lg:gap-8">
                        <div className="flex flex-col w-1/2 border-8 border-[#E0D3AF] p-4 rounded-xl justify-center">
                            <h3 className="text-xl sm:text-2xl lg:text-4xl">{semesterOneTitle}</h3>
                            <p className="text-md sm:text-lg lg:text-xl">{semesterOneText}</p>
                        </div>
                        <div className="flex flex-col w-1/2 border-8 rounded-xl border-[#E0D3AF] p-4 justify-center">
                            <h3 className="text-xl sm:text-2xl lg:text-4xl">{semesterTwoTitle}</h3>
                            <p className="text-md sm:text-lg lg:text-xl">{semesterTwoText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}