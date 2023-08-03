import {FaUserFriends} from 'react-icons/fa'
import {HiOutlineChat} from 'react-icons/hi'
import {GiBrickWall} from 'react-icons/gi'
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { useContentsContext } from '../../hooks/useContentsContext'

export default function BuildKeys() {
    const { language } = useLanguageContext();
    const { contents } = useContentsContext();

    let keysTitle = null, keyTitleOne = null, keyTextOne = null, keyTitleTwo = null, keyTextTwo = null, keyTitleThree = null, keyTextThree = null

    if (contents) {
        const aboutUsKeysTitle = contents.find(content => content.name === 'aboutUsKeysTitle');
        if (aboutUsKeysTitle) { keysTitle = aboutUsKeysTitle[language]}

        const aboutUsKeyTitleOne = contents.find(content => content.name === 'aboutUsKeyOneTitle');
        if (aboutUsKeyTitleOne) { keyTitleOne = aboutUsKeyTitleOne[language]}

        const aboutUsKeyTextOne = contents.find(content => content.name === 'aboutUsKeyOneText');
        if (aboutUsKeyTextOne) { keyTextOne = aboutUsKeyTextOne[language]}

        const aboutUsKeyTitleTwo = contents.find(content => content.name === 'aboutUsKeyTwoTitle');
        if (aboutUsKeyTitleTwo) {keyTitleTwo = aboutUsKeyTitleTwo[language]}

        const aboutUsKeyTextTwo = contents.find(content => content.name === 'aboutUsKeyTwoText');
        if (aboutUsKeyTextTwo) { keyTextTwo = aboutUsKeyTextTwo[language]}

        const aboutUsKeyTitleThree = contents.find(content => content.name === 'aboutUsKeyThreeTitle');
        if (aboutUsKeyTitleThree) { keyTitleThree = aboutUsKeyTitleThree[language]}

        const aboutUsKeyTextThree = contents.find(content => content.name === 'aboutUsKeyThreeText');
        if (aboutUsKeyTextThree) { keyTextThree = aboutUsKeyTextThree[language]}
    }

    return(
        <div className='flex flex-col gap-2 bg-red-900/90'>
            <div className="w-full  text-center text-6xl p-4 pt-10">{keysTitle}</div>
            
            <div className=" flex flex-row items-center justify-center md:pb-28">
                <div className="md:w-4/6 flex flex-col max-w-6xl h-full bg-red-900 p-10 lg:grid lg:grid-cols-3 gap-8 lg:rounded-xl lg:border-8 border-green-950">
                    <div className=" gap-3 flex flex-col items-center text-center">
                        <div><FaUserFriends className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]' /></div>
                        <h3 className="lg:text-3xl xl:text-4xl text-5xl">{keyTitleOne}</h3>
                        <p>{keyTextTwo}</p>
                    </div>
                    <div className="gap-3 flex flex-col items-center text-center">
                        <div><HiOutlineChat className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]'/></div>
                        <h3 className="lg:text-3xl xl:text-4xl text-5xl">{keyTitleTwo}</h3>
                        <p>{keyTextTwo}</p>
                    </div>
                    <div className="gap-3 flex flex-col items-center text-center">
                        <div><GiBrickWall className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]'/></div>
                        <h3 className="text-5xl xl:text-4xl lg:text-3xl">{keyTitleThree}</h3>
                        <p>{keyTextThree}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}