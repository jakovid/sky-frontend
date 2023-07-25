import {FaUserFriends} from 'react-icons/fa'
import {HiOutlineChat} from 'react-icons/hi'
import {GiBrickWall} from 'react-icons/gi'
import { useLanguageContext } from '../../hooks/useTeachersContext copy'
import { WebContent } from '../../content/WebContent'

export default function BuildKeys() {
    const { language, dispatch } = useLanguageContext();

    return(
        <div className='flex flex-col gap-2 bg-red-900/90'>
            <div className="w-full  text-center text-6xl p-4 pt-10">{WebContent.aboutUsKeysTitle[language]}</div>
            
            <div className=" flex items-center justify-center pb-28">
                <div className="w-4/6 max-w-6xl h-full bg-red-900 p-10 grid grid-cols-3 gap-8 rounded-xl border-8 border-green-950">
                    <div className=" gap-3 flex flex-col items-center text-center">
                        <div><FaUserFriends className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]' /></div>
                        <h3 className="text-5xl">{WebContent.aboutUsKeyOneTitle[language]}</h3>
                        <p>{WebContent.aboutUsKeyOneText[language]}</p>
                    </div>
                    <div className="gap-3 flex flex-col items-center text-center">
                        <div><HiOutlineChat className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]'/></div>
                        <h3 className="text-5xl">{WebContent.aboutUsKeyTwoTitle[language]}</h3>
                        <p>{WebContent.aboutUsKeyTwoText[language]}</p>
                    </div>
                    <div className="gap-3 flex flex-col items-center text-center">
                        <div><GiBrickWall className='text-8xl border-4 p-2 rounded-full border-[#E0D3AF]'/></div>
                        <h3 className="text-5xl">{WebContent.aboutUsKeyThreeTitle[language]}</h3>
                        <p>{WebContent.aboutUsKeyThreeText[language]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}